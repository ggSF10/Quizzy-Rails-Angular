var QuizAllView = function(el) {
  this.el = el;
  var view = this;
  this.template = _.template($('.all-quizzes-template').html());
  $(document).on('show_all_quizzes', function(e, quizArray) {
    $(this.el).empty();
    for (var i = 0; i < quizArray.length; i++) {
      view.render(quizArray[i]);
    }
    view.callback();
  });
};

QuizAllView.prototype.render = function(quiz) {
  var singleQuiz = this.template(quiz);
  $(this.el).append(singleQuiz);
};

QuizAllView.prototype.callback = function() {
  $('.title-text').click(function() {
    var id = $(this).data('id');
    $(document).trigger('show_single-Quiz', id);
  });
};

