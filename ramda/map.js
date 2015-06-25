var R = require('ramda');


function map(func, collection){
	var result = [];
	R.forEach(function(val){
		result.push(func(val));
	}, collection);
}

function reduce(func, accumalator, collection){
	debugger;
	if(collection.length === 0){
		return accumalator;
	}else{
		accumalator = func(accumalator, collection.pop());
		reduce(func, accumalator, collection);
	}
	return accumalator;
}

