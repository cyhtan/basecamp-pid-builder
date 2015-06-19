var TitleView = Backbone.View.extend({

  el: '<h2>',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.text('Add a PID');
    return this;
  }

});
