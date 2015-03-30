module.exports = function curryFunc(func){
	var numOfArgs = func.length;
	return new function curriedFunc(){
		this.getNumOfArgs = function(){
			return numOfArgs;
		};
	};
};

// module.exports = function curryFunc(){};


