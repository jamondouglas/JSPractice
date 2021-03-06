//dont use concat twice
//pull out setting the defaults
// pull slicing functionality
var _ = require('lodash');

function setDefaults(value,defaultValue){
	return _.isUndefined(value) && defaultValue;
}

function addElementToCollection(collection, item){
	return collection.concat(item);
}

function sliceArray(collection, start, end){
	return _.slice(collection,start, end);
}

function lessThan(a,b){
	return a < b;
}

module.exports = function curryFunc(func, numOfArgs,argAccumalator){
	numOfArgs = setDefaults(numOfArgs, func.length);
	argAccumalator = setDefaults(argAccumalator, []);
	return function(){
		if(_.isEqual(numOfArgs, arguments.length)){
			return func.apply(null,addElementToCollection(argAccumalator, sliceArray(arguments)));
		}else if(lessThan(arguments.length, numOfArgs)){
			argAccumalator = addElementToCollection(argAccumalator,sliceArray(arguments,0,arguments.length));
			return curryFunc(func,numOfArgs-arguments.length,argAccumalator);
		}
	};
};

// module.exports = function curryFunc(){};


