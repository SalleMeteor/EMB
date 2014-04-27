Template.dashboard.created = function () {
  //Session.set("currentPage", "dashboard"); 
  Session.set("image", false);
  
}

Template.dashboard.events({
	 'click #button': function() {

	 	var image = document.getElementById ("upload");
	 	var description = document.getElementById("description").value;
	 	var user = document.getElementById("user").value;
	 	
		Meteor.saveFile(image.files[0], image.files[0].name);
		
		var now = moment().format('MMMM Do YYYY, h:mm:ss a');
		var user = Meteor.user().username;
		
		//Save to Mongodb
		Box.insert({name: image.files[0].name, description: description ,user: user ,time: now});

				
		var $boxes = $('<div class="item boxImage"><img class="imagen" src="../image/{{name}}"><div style="padding:10px;">{{description}}</div><div id="line"></div></div>');
		$('#container').masonry( 'appended', $boxes );
		$('#container').masonry('reload');
		
		Session.set("image", false);

	}
});

Template.dashboard.events({
	 'change #upload': function() {
	 	var image = document.getElementById ("upload");
	 	readURL(image);

	}
});

//Función para hacer una preview de la imagen
function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imagePrev').attr('src', e.target.result);
        }
         Session.set("image", true); 
        reader.readAsDataURL(input.files[0]);
    }
}
Template.dashboard.selectedImage = function() {
  if (Session.get('image') == true) {
    return true;
  } else {
    return false;
  }
}

Meteor.saveFile = function(blob, name, path, type, callback) {
	
	var fileReader = new FileReader(),method, encoding = 'binary', type = type || 'binary';
	
	switch (type) {
		case 'text':
		method = 'readAsText';
		encoding = 'utf8';
		break;
		case 'binary':
		method = 'readAsBinaryString';
		encoding = 'binary';
		break;
		default:
		method = 'readAsBinaryString';
		encoding = 'utf8';
		break;
	}

	fileReader.onload = function(file) {
		Meteor.call('saveFile', file.currentTarget.result, name, path, encoding, callback);
	}
	fileReader[method](blob);
}