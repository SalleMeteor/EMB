//Meteor.publish("myContacts", function(name) {
Meteor.publish("allContacts", function() {
  return Contacts.find(); // get all contacts
  //return Contacts.find({ name: name });
});