var EntryView = Backbone.View.extend({

  className: 'entry',

  template: _.template('<p>ID: <%= id %>  Date: <%= date %>  Author(s): <%= authors %>  Title: <%= title %>  isClass: <%= isClass %>  classLevel: <%= classLevel %>  classTags: <%= classTags %></p>'),

  initialize: function() {
    this.render();
  },

  render: function() {

    var entry = this.template({
      id: this.model.get('id'),
      date: this.model.get('date'),
      authors: this.model.get('authors'),
      title: this.model.get('title'),
      isClass : this.model.get('isClass'),
      classLevel: this.model.get('classLevel'),
      classTags: this.model.get('classTags')
    });

    this.$el.html(entry);

    return this;
  }
});
