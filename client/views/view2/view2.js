Template.view2.helpers({
  
  greetings: function() {
    return "Welcome to myfirstapp.";
  },
  
  contact: function() {
    return Contacts.find();     
  }
  
});

Template.view2.events({
  'click input': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
    
    Session.set("currentPage", "view1");
    
  }
});