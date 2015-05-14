console.log(addUpNumbers(process.argv));
function addUpNumbers(array){
	var sum = 0;
	array.forEach(function(element) {
		var asNumber = Number(element);
		
		if(isNaN(asNumber) == false){
			sum += asNumber;
		}
	}, this);
	return sum;
}