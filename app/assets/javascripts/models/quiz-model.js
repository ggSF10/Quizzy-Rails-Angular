var QuizModel = function(data) {
  this.id = data.id;
  this.title = data.title;
};

QuizModel.all = function() {
  var quizArray = [];
  $.get('/quizzes', function(data) {
    $.each(data, function(index, value) {
      quizArray.push(new QuizModel(value));
    });
    $(document).trigger('show_all_quizzes', [quizArray]);
  });
};