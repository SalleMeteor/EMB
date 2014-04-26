Template.dashboard.created = function () {
  Session.set("currentPage", "dashboard"); 
  
}

Template.dashboard.events({
	 'click #button': function() {

	 	var image = document.getElementById ("upload");
	 	var description = document.getElementById("description").value;
	 	
		Meteor.saveFile(image.files[0], image.files[0].name, description);
		
		//Save to Mongodb
		Box.insert({name: image.files[0].name, description: description });
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

        reader.readAsDataURL(input.files[0]);
    }
}

Meteor.saveFile = function(blob, name, description, path, type, callback) {
	
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
		Meteor.call('saveFile', file.currentTarget.result, name, description, path, encoding, callback);
	}
	fileReader[method](blob);
}
