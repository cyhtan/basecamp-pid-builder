var SID = Backbone.Collection.extend({

  model: PIDEntry,

  addPIDEntry: function(data) {
    this.add(
      new PIDEntry({
        id: data.id,
        date: data.date,
        authors: data.authors,
        title: data.title,
        isClass : data.isClass,
        classLevel: data.classLevel,
        classTags: data.classTags
      })
    );
  }

});
