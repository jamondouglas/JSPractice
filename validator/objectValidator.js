var typeOfNull = function(a) {
  if(a === null){
    throw new Error('You have a null error');
  } else {
    return a;
  }
};

var typeOf = function(c) {
  return function(a) {
    if(typeof a !== c){
      return a + ' is not typeOf ::'+ c;
    } else {
      return a;
    }
  };
};

var typeOfString    = typeOf('string');
var typeOfNumber    = typeOf('number');
var typeOfFunc      = typeOf('function');
var typeOfBool      = typeOf('boolean');
var typeOfUndefined = typeOf('undefined');
var typeOfObject    = typeOf('object');


var objOf = function(c) {
  return function(obj) {
    typeOfObject(obj);
    var objectToValidate = Object.create(obj);
    return _.mapObject(objectToValidate,c);
  };
};

var objOfStrings = objOf(typeOfString);

function valObj(obj) {
  return obj.map(typeOfString);
}

Contract  = {
  title    : typeOfString,
  contacts :  typeOfObject,
  isAdmin  : typeOfBool
};

function validate(elem, c, obj) {
  debugger;
 obj[elem] = c.elem(obj.elem);
}


function validObject (c) {
  typeOfObject(c);
  return function(obj){
    _.mapObject(obj, validate );
  };
}

function validObjStructure(a) {

  return {

  };
}


//need to create something like maybeString returns maybeType which could be boolean or string
//need to have validators stop throwing errors.


var repeatString = function(s) {
  typeOfString(s);
  return s+s;
};

//MaybeFunctor
var Maybe = function(){};
var None = function(){};
None.prototype = Object.create(Maybe.prototype);
None.prototype.toString = function(){return 'None';};

var none = new None();

var Some = function(x){
  return this.x;
};
Some.prototype.toString = function(){return 'Some';}; 
var some = function(x){return Some(x);};

var maybe = function(c){
  return function(m){
    if(m instanceof None){
      return m;
    } else if(m instanceof Some){
      return some(c(m.x));
    } else {
      throw new TypeError('Non supoorted type');
    }
  };
};
maybe(repeatString(none));

