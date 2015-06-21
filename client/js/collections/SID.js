var SID = Backbone.Collection.extend({

  model: PIDEntry,

  addPIDEntry: function(data) {
    this.add(
      new PIDEntry({
        pid: data.pid,
        date: data.date,
        authors: data.authors,
        title: data.title,
        isClass : data.isClass,
        classLevel: data.classLevel,
        classTags: data.classTags
      })
    );
  },

  removePIDEntry: function(id) {
    this.remove(id);
  },

  updatePIDEntry: function(id, data) {
    this.get(id).pid = data.pid;
    this.get(id).date = data.date;
    this.get(id).authors = data.authors;
    this.get(id).title = data.title;
    this.get(id).isCLass = data.isCLass;
    this.get(id).classLevel = data.classLevel;
    this.get(id).classTags = data.classTags;
  }
  
});
