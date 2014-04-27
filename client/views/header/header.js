Template.header.events({

  'click #home': function(){
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
    
    Session.set("currentPage", "home");
    
  },
  'click #logo': function(){
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
    
    Session.set("currentPage", "home");
    
  },
  'click #remove': function(){
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
    
    Session.set("currentPage", "remove");
    
    }
});
