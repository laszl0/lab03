var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2, process.argv.length);

function loadUrlsDataSameOrder(urls, callback){
	var urlsData = [];
	var counter = urls.length;
	var getUrlData = function(url, index){
		var request = http.get(url, function(response){
		response.pipe(bl(function(err, data){
			if(err){
				return console.error(err);
			}
			var pageDataString = data.toString();
			urlsData[index] = (pageDataString);
			if(--counter === 0 && callback) callback(urlsData);
		}));
	});
	};
	
	for (var index = 0; index < urls.length; index++) {
		var element = urls[index];
		urlsData[index] = "";
		getUrlData(element, index);
	}
}

loadUrlsDataSameOrder(urls, function(arrOfData){
	for (var index = 0; index < arrOfData.length; index++) {
		var element = arrOfData[index];
		console.log(element);
	}
});