Template.home.created = function () {
  Session.set("currentPage", "home");
}

Template.home.helpers({
  page: function(page) {
    return Session.equals("currentPage", page);     
  }
});
  
  
$(function(){    
	$('#container').masonry({
		itemSelector: '.item',
		columnWidth: 30
	});
});
