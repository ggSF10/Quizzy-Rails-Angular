var ScoreView = function(el) {
  this.el = el;
  var view = this;
  this.template = _.template($('.single-score-template').html());
  $(document).on('show_score', function(e, data) {
    view.render(data);
  });
};

ScoreView.prototype.render = function(data) {
  var score = this.template(data);
  $(this.el).empty().append(score);
};
