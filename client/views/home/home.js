Template.home.helpers({
  box: function() {
    return Box.find();     
  }
});

Template.home.created = function () {
  Session.set("currentPage", "home");
}

Template.home.helpers({
  page: function(page) {
    return Session.equals("currentPage", page);     
  }
});





