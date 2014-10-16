var QuizController = function() {
  this.quizView = new QuizAllView('.all-quizzes');
  this.questionView = new QuestionView('.current-question');
  this.scoreView = new ScoreView('.final-score');
  $(this.questionView.el).hide();
  $(this.quizView.el).hide();
  $(this.scoreView.el).hide();
};

QuizController.prototype.start = function() {
  var view = this;
  QuizModel.all();
  $(this.questionView.el).hide();
  $(this.quizView.el).show();
  $(this.scoreView.el).hide();

  $(document).on('show_single-Quiz', function(e, id) {
    QuestionModel.all(id);
    $(view.questionView.el).show();
    $(view.quizView.el).hide();
    $(view.scoreView.el).hide();
  });

  $(document).on('post_score', function(e, score) {
    var obj = {
      score: (score/view.questionView.questions.length*100).toFixed(0),
      user: view.user,
      quiz_id: view.questionView.questions[0].quizId
    };
    ScoreModel.createScore(new ScoreModel(obj));
    $(view.questionView.el).hide();
    $(view.quizView.el).hide();
    $(view.scoreView.el).show();
  });

  $('.user-name').keyup(function(e) {
    if (e.which === 13 && $(this).val() !== '') {
      view.user = $(this).val();
      $('.user-name-container').hide();
    }
  });
};

$(document).ready(function() {
  var qc = new QuizController();
  qc.start();
});

