/// <reference path="typings/node/node.d.ts"/>
var net = require('net');

var port = process.argv[2];

var server = net.createServer(function(socket){
	var date = new Date();
	var data = formatDate(date);
	socket.write(data);
	socket.write("\n");
	socket.end();
});
server.listen(port);



var formatDate = function(date){
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	month = (month < 10 ? "0" : "") + month;
	
	var day = date.getDate();
	day = (day < 10 ? "0" : "") + day;
	
	var hour = date.getHours();
	hour = (hour < 10 ? "0" : "") + hour;
	
	var minute = date.getMinutes();
	minute = (minute < 10 ? "0" : "") + minute;
	
	var str = year + "-" + month + "-" + day + " " + hour + ":" + minute;
	return str;	
};