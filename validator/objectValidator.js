var any = function(x){
  return x;
};

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
      throw new Error('Expected type :: '+c+'!');
    } else {
      return a;
    }
  };
};


var instanceOf = function(  ){

};

var typeOfString    = typeOf('string');
var typeOfNumber    = typeOf('number');
var typeOfFunc      = typeOf('function');
var typeOfBool      = typeOf('boolean');
var typeOfUndefined = typeOf('undefined');
var typeOfObject    = typeOf('object');

var typeOfArray = function(arr){
     console.log('checking for arr',arr);
    // arr = typeOfNull(arr);
     if(Object.prototype.toString.call(arr) !== '[object Array]'){
         throw new Error('Expected type :: Array');
     }else{
         return arr;
     }
};

var checkLengthArray  = function(arr){
  if(!arr.length){
    throw new Error('Can\'t operate on an empty array');
  }else {
    return arr;
  }
};

var arrOf = function(c) {
  return function(collection) {
    return typeOfArray(collection).map(c);
  };
};

var arrOfNumbers = arrOf(typeOfNumber);
var arrOfString  = arrOf(typeOfString);
var arrOfObjects = arrOf(typeOfObject);

var objOf = function(c) {
  return function(obj) {
    typeOfObject(obj);
    return _.mapObject(obj,c);
  };
};

var objOfStrings = objOf(typeOfString);

function valObj(obj) {
  return obj.map(typeOfString);
}

//need to create something like maybeString returns maybeType which could be boolean or string
//need to have validators stop throwing errors.


var repeatString = function(s) {
  typeOfString(s);
  return s+s;
};

//MaybeFunctor
var Maybe = function(){};

Maybe.prototype.getOrElse = function(x){
    if( this instanceof Some){
        return this.x;
    }else{
        return x;
    }
};

var None = function(){};
None.prototype = Object.create(Maybe.prototype);
None.prototype.toString = function(){return 'None';};

var none = new None();

var Some = function(x){
  this.x = x;
};
Some.prototype = Object.create(Maybe.prototype);
Some.prototype.toString = function(){return "Some(" + this.x+")";}; 

var some = function(x){ return new Some(x);};

var maybe = function(c){
  return function(m){
    if(m instanceof None){
      return m;
    } else if(m instanceof Some){ 
      return some(c(m.x));
    } else {
      throw new TypeError('Non supported type');
    }
  };
};

Array.unit = function(c) {
  return [x];
};

Maybe.unit = some;

var arrOfUnit = function(c) {
    return function(x) {
        x = c(x);
        return arrOf(c([x]));
    };
};

var maybeUnit = function(c) {
    return function(x) {
        x = c(x);
        return maybe(c)(some(x));
    };
};


//make this robust to handle multiple nested arrays
var arrOfFlatten = function(c){
  return function(aax){
      x = arrOf(arrOf(c))(aax);
      var result = [], len = x.length;
      for(var i = 0; i< len; ++i){
          result = result.concat(aax[i]);
      }
      return arrOf(c)(result);
  };
};
        
var maybeFlatten = function(c) {
    return function(mmx) {
        mmx = maybe(maybe(c))(mmx);
        var result = mmx;
        
        if(result instanceof Some){
            result = result.x;
        }
        return maybe(c)(result);
    };
};

Array.prototype.flatten = function(c){
  if(c === void 0){
    console.log('c was empty ');
    c = any;
  }
  return arrOfFlatten(c)(this);
};

Maybe.prototype.flatten = function(c){
  if(c === void 0){
    c = any;
  }
  return maybeFlatten(c)(this);
};
//console.log(some('pk'));
console.log('l');
//console.log(some('jam').getOrElse('ok'));
//console.log(some('jamjam'));
//a Unit 

//flatten
