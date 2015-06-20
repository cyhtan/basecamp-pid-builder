var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {

    this.title = new TitleView();

    this.input = new InputView({
      collection: this.collection
    });

    this.list = new ListView({
      collection: this.collection
    });

    this.formDiv = $('#input-form');
    this.listDiv = $('#entryRows');

    this.render();
  },

  render: function() {

    this.formDiv.append([
      this.title.$el,
      this.input.$el,
    ]);

    this.listDiv.append([
      this.list.$el
    ]);

    return this;
  }

});
