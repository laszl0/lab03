var http = require('http');
var bl = require('bl');

var url = process.argv[2];

var request = http.get(url, function(response){
	response.pipe(bl(function(err, data){
		if(err){
			return console.error(err);
		}
		var pageDataString = data.toString();
		console.log(pageDataString.length);
		console.log(pageDataString);
	}));
});
