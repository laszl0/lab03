
var mymodule = require('./ex05-mymodule.js');

var dirPath = process.argv[2];
var extension = process.argv[3];

//var myObject = mymodule();
mymodule(dirPath, extension, function(err, data){
	if(err){
		throw err;
	}
	data.forEach(function(element){
		console.log(element);
	});
});