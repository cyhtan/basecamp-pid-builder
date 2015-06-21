var ListView = Backbone.View.extend({

  el: '#entryRows',

  events: {
    'click .edit': 'editEntry',
    'click .remove': 'removeEntry',
  },

  initialize: function() {
    //this.listenTo(this.collection, 'add', this.render);
    this.collection.on('add', this.render, this);
  },

  render: function() {

    this.$el.empty();

    this.entries = this.collection.models.map(function(model) {
      return new EntryView({
        model: model
      });
    });

    var $els = this.entries.map(function(entry) {
      return entry.$el;
    });

    this.$el.append($els);

    return this;
  },

  removeEntry: function(e) {
    e.preventDefault();
    var id = $(e.currentTarget).data("id");
    this.collection.removePIDEntry(id);
    $("tr[data-id='" + id +"']").hide();
  },

  editEntry: function(e) {
    //e.preventDefault();
    //var id = $(e.currentTarget).data("id");
    //this.collection.removePIDEntry(values);
  },

});
