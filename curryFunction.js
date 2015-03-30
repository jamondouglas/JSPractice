//dont use concat twice
//pull out setting the defaults
// pull slicing functionality
var _ = require('lodash');
function setDefaults(value,defaultValue){
	return _.isUndefined(value) && defaultValue;
}



module.exports = function curryFunc(func, numOfArgs,argAccumalator){
	numOfArgs = setDefaults(numOfArgs, func.length);
	argAccumalator = setDefaults(argAccumalator, []);
	return function(){
		if(numOfArgs === arguments.length){
			return func.apply(null,argAccumalator.concat(Array.prototype.slice.call(arguments)));
		}else if(arguments.length < numOfArgs ){
			argAccumalator = argAccumalator.concat(Array.prototype.slice.call(arguments,0,arguments.length));
			return curryFunc(func,numOfArgs-arguments.length,argAccumalator);
		}
	};
};

// module.exports = function curryFunc(){};


