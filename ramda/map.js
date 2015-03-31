var R = require('ramda');


function map(func, collection){
	var result = [];
	R.forEach(function(val){
		result.push(func(val));
	}, collection);
}