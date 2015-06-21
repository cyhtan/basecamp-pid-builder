var idCounter = 1;

var PIDEntry = Backbone.Model.extend({

  defaults: {  
    id: '',
    basecampId: '',
    pid: '',
    date: '',
    authors: '',
    title: '',
    isCLass : false,
    classLevel: '',
    classTags: ''
  },

  initialize: function() {
    this.set('id', idCounter);
    idCounter++;
  },

});
