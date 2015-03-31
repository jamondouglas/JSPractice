

//identity
var _ = {};



_.idenity = function identiy(obj){
	return obj;
};

_.each = function  each(obj, iteratee, context){
	var keys,index;
	if(Array.isArray(obj)){
		for(index = 0; index< obj.length; index++){
			iteratee(obj[index], index, obj);
		}
	}else{
		keys = Object.keys(obj);
		for(index = 0; index < keys.length; index++){
			iteratee(obj[keys[index]],keys[index], obj);
		}
	}
};

_.map = function map(obj, iteratee, context){
	var results = [];
	
	_.each(obj,function(value,key,collection){
		debugger;
		return results.push(iteratee(value, key, collection));
	}, context);
	return results;
};



//HELPER FUNCTIONS
//isArray
function add1(x){x+1;}
var testFunc = (function(){return function(x){console.log("Value of x is: "+x);};});