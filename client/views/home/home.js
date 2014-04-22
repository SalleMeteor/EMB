Template.home.created = function () {
  Session.set("currentPage", "home");
}

Template.home.helpers({
  page: function(page) {
    return Session.equals("currentPage", page);     
  }
});
  
Template.home.pageVar = function (){
	return  Session.get("currentPage");
};

$(function(){    
	$('#containerMasonry').masonry({
		itemSelector: '.item',
		columnWidth: 30
	});
});
