var InputView = Backbone.View.extend({

  tagName: 'form',

  events: {
    'keydown': 'keyAction',
  },

  initialize: function() {
    this.render();
  },

  render: function() {
   this.$el.append([
      '<input name="id">',
      '<input name="date">',
      '<input name="authors">',
      '<input name="title">',
      '<input name="isClass">',
      '<input name="classLevel">',
      '<input name="classTags">'
    ]);
    return this;
  },

  keyAction: function(e) {

    var isEnterKey = (e.which === 13);

    var values = {};
    $.each(this.$el.serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    if(isEnterKey) {

      this.collection.addPIDEntry(values);
      //this.resetInput();

    }

  },

  resetInput: function() {
    this.$el.attr({
      placeholder: 'Enter a zip code'
    });
    this.clearInput();
  },

  clearInput: function() {
    this.$el.val('');
  }

});
