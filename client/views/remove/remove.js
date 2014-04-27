Template.remove.helpers({
    box: function() {
    	return Box.find( {user: Meteor.user().username} );
    }
});
Template.remove.created = function () {
  Session.set("currentPage", "remove"); 
}

Template.remove.events({
	 'click #btnRomove': function(event) {
		
		var paragraph = event.currentTarget;
		var idBox = event.target.value;
	 	
	 	Box.remove({_id:idBox});
	 	
	 	var obj = $('#'+idBox+'');
	    $('#container').masonry('remove',obj);
	    $('#container').masonry('reload');

	}
});
