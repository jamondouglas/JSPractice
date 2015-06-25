var R = require('ramda');

//var validator = R.curry()

// function validator(valProcess, objToBeValidated){
// 	var result = true;
// 	var isType = R.curry(function(type, item){
// 		var result = R.is(type, item);
// 		return result && R.is(type, item);
// 	});
	
// 	R.mapObj(print, objToBeValidated);

// 	return {
// 		isString : isString,
// 		isObject : isObject,
// 		isDate	 : isDate,
// 		isImage  : isImage,
// 		isType   : isType
// 	};
// }


function validator(validationPattern, objToBeValidated){
var undefinedValue = undefined; 
var isString = function(prop){
	return R.is('String', prop);
};

var isUndefined = function(prop){
	return R.is(undefinedValue, prop);
};

var isObject = function(prop) {
	return R.is('Object', prop);
};

var isNil = R.isNil(prop);
 return {
 	isString : isString,
 	isObject : isObject,
 	isNil	 : isNil
 };
}

var objToBeValidate = {
	description : 'description text',
	type        : 'type text',
	title		: 'title text',
	startDate	: new Date(),
	endDate     : new Date(),
	creator		: {name : 'Jamon'}
};

var validationPattern = {
	type  		: R.compose(R.isType),
	title       : R.compose(),
	description : validator.isType(String),
	startDate 	: validator.isType(Date),
	endDate		: validator.isType(Date),
	creator     : validator.isType({})
};