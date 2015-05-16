
var fs = require('fs');
var path = require('path');

// my first module
module.exports = function (dirPath, extension, callback) {
			fs.readdir(dirPath, function(err, list){
				if(err){
					return callback(err);
				}
				var listOfFiles = [];
				list.forEach(function(element){
					var ext = path.extname(element);
					if(ext == '.' + extension){
						listOfFiles.push(element);
					}
				});
				callback(null, listOfFiles);
			});
		};
	