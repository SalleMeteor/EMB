Meteor.methods({
  foo: function (arg1, arg2) {
    // .. do stuff ..
    /*
    if (you want to throw an error)
      throw new Meteor.Error(404, "Can't find my pants");
    */
    return "some return value";
  },

  bar: function () {
    // .. do other stuff ..
    return "baz";
  }
});
