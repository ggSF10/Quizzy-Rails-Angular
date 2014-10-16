var QuestionModel = function(data) {
  this.id = data.id;
  this.question = data.question;
  this.answer = data.answer;
  this.choices = data.choices.split(";");
  this.quizId = data.quiz_id;
};

QuestionModel.all = function(quizId) {
  var questionArray = [];
  $.get('/quizzes/' + quizId + '/questions', function(data) {
    for (var i = 0; i < data.length; i++) {
      questionArray.push(new QuestionModel(data[i]));
    }
    $(document).trigger('got_da_questions', [questionArray]);
  });
};