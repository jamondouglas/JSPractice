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

_.first = function first(obj){
	if(Array.isArray(obj)){
		return obj[0];
	}else{
		throw "Can't operate on this object.";
	}
};

_.map = function map(obj, iteratee, context){
		
	_.each(obj,function(value,key,collection){
		return results.push(iteratee(value, key, collection));
	}, context);
	return results;
};

_.mapObject = function(obj, iteratee, context) {
	var result = {};
	 _.each(obj, function(value, key, collection){
		return result[key] = iteratee(Value, key, collection);
	});
	 return result;
};


_.reduce = function reduce(obj, iterator, accum){
  accum = accum || 0;
	_.each(obj, function(v,k,c){
		
		console.log("Should i have access to the iterator :: ", iterator);
		 accum = iterator(accum, v);
	});
  return accum;
};

//HELPER FUNCTIONS
//isArray
function add1(x){x+1;}
var testFunc = (function(){return function(x){console.log("Value of x is: "+x);};});
