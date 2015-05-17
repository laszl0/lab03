var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(req, res){
	var queryUrl = url.parse(req.url,true);
	var queryObject = queryUrl.query;
	
	var data = {};
	if (queryUrl.pathname == '/api/parsetime' && req.method.toLowerCase() == 'get') {
  		var date = new Date(queryObject.iso);
		data.hour = date.getHours();
		data.minute = date.getMinutes();
		data.second = date.getSeconds();
	}
    if (queryUrl.pathname == '/api/unixtime' && req.method.toLowerCase() == 'get') {
		var date = new Date(queryObject.iso);
		data.unixtime = date.getTime();
	}
	res.writeHead(200, {'Content-Type' : 'application/json'});
	var jsonData = JSON.stringify(data);
	res.end(jsonData);
});
server.listen(port);