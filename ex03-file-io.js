var fs = require('fs');
var filePath = process.argv[2];
var newLineChar = "\n";
fs.readFile(filePath, function (err, data) {
  if (err) throw err;
  var bufferAsString = data.toString();
  var splitByNewLineChar = bufferAsString.split(newLineChar);
  console.log(splitByNewLineChar.length - 1);
});


//var newLineCharArr = [newLineChar.charCodeAt(0), newLineChar.charCodeAt(1)];
//console.log(newLineCharArr);

//var fileBuffer = fs.readFileSync(process.argv[2]);
//var bufferAsString = fileBuffer.toString();
//var splitByNewLineChar = bufferAsString.split(newLineChar);
//console.log(splitByNewLineChar.length - 1);

//for (var index = 0; index < fileBuffer.length; index++) {
	//var element = fileBuffer.readUInt8(index);
	//console.log(element);
	//console.log(String.fromCharCode.apply(null, [element]))
//}