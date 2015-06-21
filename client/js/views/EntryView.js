var EntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= pid %></td><td><%= date %></td><td><%= authors %></td><td><%= title %></td><td><%= isClass %></td><td><%= classLevel %></td><td><%= classTags %></td><td><button data-id="<%= id %>" style="float:none;" type="button" class="close edit" aria-label="Close" data-toggle="modal" data-target="#modalEdit"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>&nbsp;<button data-id="<%= id %>" style="float:none;" type="button" class="close remove" aria-label="Close"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>'),

  initialize: function() {
    this.render();
  },

  render: function() {

    var entry = this.template({
      id: this.model.get('id'),
      pid: this.model.get('pid'),
      date: this.model.get('date'),
      authors: this.model.get('authors'),
      title: this.model.get('title'),
      isClass : this.model.get('isClass'),
      classLevel: this.model.get('classLevel'),
      classTags: this.model.get('classTags')
    });

    this.$el.html(entry);
    this.$el.attr( 'data-id', this.model.get('id') );

    return this;
  }
});
