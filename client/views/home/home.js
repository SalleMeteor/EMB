Template.home.helpers({
	page: function(page) {
    	return Session.equals("currentPage", page);     
    },
    box: function() {
    	var options = {
		    "sort": { "_id": -1 },
		  };
    	return Box.find({},options);  
    },
    username: function() {
    	return Meteor.user().username;
    }
});

Template.home.created = function () {
 	Session.set("currentPage", "home");
  
}

    