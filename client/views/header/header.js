Template.header.events({
  'click #dashboard': function(){
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
    
    Session.set("currentPage", "dasboard");
    
  },
  'click #home': function(){
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
    
    Session.set("currentPage", "home");
    
  }
});