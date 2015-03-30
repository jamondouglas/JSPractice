

module.exports = function curryFunc(func, numOfArgs,argAccumalator){
	numOfArgs = numOfArgs || func.length;
	var argAccumalator = argAccumalator || [];
	return function(){
		if(numOfArgs === arguments.length){
			debugger;
			return func.apply(null,argAccumalator.concat(Array.prototype.slice.call(arguments)));
		}else if(arguments.length < numOfArgs ){
			debugger;
			argAccumalator = argAccumalator.concat(Array.prototype.slice.call(arguments,0,arguments.length));
			return curryFunc(func,numOfArgs-arguments.length,argAccumalator);
		}
	};
};

// module.exports = function curryFunc(){};


