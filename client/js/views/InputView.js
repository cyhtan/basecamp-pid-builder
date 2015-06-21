var InputView = Backbone.View.extend({

  tagName: 'form',

  events: {
    'keydown': 'keyAction',
    'click .save-new-entry': 'saveNewEntry'
  },

  formGroupTemplate: _.template('<div class="form-group"><label for="<%= id %>"><%= label %></label><input type="<%= label %>" class="form-control" id="<%= id %>" name="<%= id %>"></div>'),

  initialize: function() {
    this.render();
  },

  render: function() {
   this.$el.append([
      this.formGroupTemplate({id:"pid",label:"ID",type:"text"}),
      this.formGroupTemplate({id:"date",label:"Date",type:"date"}),
      this.formGroupTemplate({id:"authors",label:"Author(s)",type:"text"}),
      this.formGroupTemplate({id:"title",label:"Title",type:"text"}),
      this.formGroupTemplate({id:"isClass",label:"Is a Class? (True or False)",type:"text"}),
      this.formGroupTemplate({id:"classLevel",label:"Class Level",type:"text"}),
      this.formGroupTemplate({id:"classTags",label:"Class Tags",type:"text"}),
      //'<button type="submit" name="submit" class="btn btn-primary save-new-entry">Save New Entry</button>'
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
      this.clearInput();

    }

  },

  // saveNewEntry: function() {
  //   var values = {};
  //   $.each(this.$el.serializeArray(), function(i, field) {
  //       values[field.name] = field.value;
  //   });

  //   this.collection.addPIDEntry(values);
  //   this.clearInput();
  // },

  clearInput: function() {
    this.$el.trigger("reset");
  }

});
