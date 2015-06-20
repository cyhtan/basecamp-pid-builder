var EntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= id %></td><td><%= date %></td><td><%= authors %></td><td><%= title %></td><td><%= isClass %></td><td><%= classLevel %></td><td><%= classTags %></td><td><button style="float:none;" onclick="editEntry(this)" type="button" class="close" aria-label="Close" data-toggle="modal" data-target="#modalEdit"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>&nbsp;<button style="float:none;" onclick="removeEntry(this)" type="button" class="close" aria-label="Close"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>'),

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
