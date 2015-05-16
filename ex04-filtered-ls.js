var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var extension = process.argv[3];

fs.readdir(dirPath, function(err, list){
	list.forEach(function(element) {
		var ext = path.extname(element);
		if(ext == '.' + extension){
			console.log(element);
		}
	}, this);
});