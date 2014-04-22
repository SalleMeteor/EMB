Contacts = new Meteor.Collection("contacts");

Contacts.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },	
  remove: function() {
    return true;
  }
});

/*
Contacts.deny({
  insert: function () {
    return true;
  }
});
*/
