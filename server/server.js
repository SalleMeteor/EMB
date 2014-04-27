//if (Meteor.isServer) {
	
	var fs = Meteor.require('fs'); 
	
	Meteor.methods({
		saveFile: function(blob, name, path, encoding ) {
			//console.log("Name: " + name + " ");
			//console.log("Description: " + description + " ");
			var path = "../../../../../public/img/";
			fs.writeFile(path + name, blob, encoding, function(err) {
				if (err) {
					throw (new Meteor.Error(500, 'Failed to save file.', err));
				} else {
					console.log('The file ' + name + ' (' + encoding + ') was saved to ' + path);
				}
			});
			 
			function cleanPath(str) {
				if (str) {
					return str.replace(/\.\./g,'').replace(/\/+/g,'').
					replace(/^\/+/,'').replace(/\/+$/,'');
				}
			}
			function cleanName(str) {
				return str.replace(/\.\./g,'').replace(/\//g,'');
			}
		} // close saveFile
	});

//}