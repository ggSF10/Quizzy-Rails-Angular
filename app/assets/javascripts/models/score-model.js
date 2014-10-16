var ScoreModel = function(data) {
  this.user = data.user;
  this.score = data.score;
  this.quiz_id = data.quiz_id;
};

ScoreModel.createScore = function(data) {
  $.ajax({
    type: "post",
    url: "/scores",
    data: {score: data, quiz_id: data.quiz_id}
  })
    .done(function(data) {
      $(document).trigger('show_score', new ScoreModel(data.entity));
    });
};