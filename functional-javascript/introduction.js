//Imperative & Object Oriented

var Flock = function(n) {
  this.seagulls = n;
};

var flock_a = new Flock(4);
var flock_b = new Flock(2);
var flock_c = new Flock(0);

Flock.prototype.conjoin = function(other) {
  this.seagulls += other.seagulls;
  console.dir(this);
  return this;
};

Flock.prototype.breed = function(other) {
  this.seagulls *= other.seagulls;
  return this;
};

//flock_a.conjoin(flock_c).breed(flock_b).conjoin(flock_a.breed(flock_b)).seagulls;

///Functional Style

//associative always get the same answer regardless of grouping or parenthesis 
  // (5+1) + 2 == 5 + (1+2)
  // adding and multiplying
    //doesn't work for subtraction or division
  add(add(x, y), z) == add(x, add(y, z))

//communative you can switch numbers and get the same result: a+ b = b+a
  // adding and multiplying
  //doesn't work for subtraction or division
  add(x, y) == add(y, x)

//distributive get the same answer when you multiply a num by a group of numbers added together
  // or multiply separately then add them
  // doesn't work with division
  //3 × (2 + 4) = 3 x 2 + 3 x 4 
  multiply(x, add(y,z)) == add(multiply(x, y), multiply(x, z))

//identity an equation that remains true no matter what values are chosen
  add(x, 0) == x

// distributive
var conjoin = function(flock_x, flock_y) {return flock_x + flock_y;};
var breed = function(flock_x, flock_y) {return flock_x * flock_y};

var flock_a = 4;
var flock_b = 2;
var flock_c = 0;

console.log(conjoin(breed(flock_b, conjoin(flock_a, flock_c)), breed(flock_a, flock_b)));


//Chapter 2 First class Functions
  // Removal of unecessary functions and needless redirections
  // No need to worry about using this

//Chapter 3 Pure Happiness with Pure functions
  // pure functions given the same input will always return the same output and doesn't have any observable side effect.
  // Slice & Splice
      //Slice is a pure function and Splice isn't.
  //pure functions do not modify variables that aren't in their scope
  //Functions are mappings of input to output.  
  // Pure functions explicitly define their arguments dependencies
    //allows for portability and good self-documentation
    //referential transparency benefits
    // equational reasoning

  function memoize (f){
    var cache = {}; 
    return function (){ 
      debugger;
      var arg_str = String(arguments); 
      console.log(arg_str," Value of passing args to String JS");
    };
  }

//Currying one input to one output
  //:: Num -> Num -> [] -> []
  // Following currying this means a function that takes a num returns a function
    // that takes a number and returns a function that takes an array and returns an
    // an array.
var slice =  R.curry(function(start, end, array){
  return Array.prototype.slice.call(array, start,end);
});

  //Exercise 
  // Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

var words =  R.split(' ');
// var words = function(str) {
//   return split(' ', str);
// }

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

var sentences = R.map(words);


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions
var filterQs = R.filter(match('/q/i'));
var filterQs = function(xs) {
  return filter(function(x){ return match(/q/i, x);  }, xs);
}


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
var _keepHighest = function(x,y){ return x >= y ? x : y; };

// REFACTOR THIS ONE:
var max = function(xs) {
  return reduce(function(acc, x){
    return _keepHighest(acc, x);
  }, 0, xs);
};

var max = R.reduce(_keepHighest,0);


// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var slice = R.curry(function(start,end){
  return Array.prototype.slice.call(array,start,end);
});


// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. Make it curried
var take = undefined;


//Composition
  //Composition uses that associative property (grouping) that allows you to construct 
  //functions to operate on a value that is piped between them.
 // Using currying and Composition allows you to use a point free style which means you
 // you don't have to specify the data that you will operate on only specify the ordering of
 // the functions

 //Pointfree code can again, help us remove needless names and keep us concise and generic.  

 //Category Theory
  // A Category defined as a colletion with the following components:
    // A collection of objects 
    // A collection of morphisms
    // A notion of composition on the morphisms
    // A distinged morphism called identity

  // Example 
    // A collection of objects - String, Numbers, Boolean, Objects
    // a collection of morphisms - String ->Bool
    // A notion of composition of morphisms
    // A Collection of morphisms

    //Identity method of Ramda helps you to delay execution


    require('../../support')
var _ = require('ramda');
var accounting = require('accounting');

// Example Data
var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
  ];

// Exercise 1:
// ============
// use _.compose() to rewrite the function below. Hint: _.prop() is curried.
var isLastInStock = function(cars) {
  var last_car = _.last(cars)
  return _.prop('in_stock', last_car);
}

var lastElement = R.last(collection);
var getElementFromObject = R.prop(string);
var getInStock = 
var isLastInStock = R.compose(getElementFromObject, lastElement);

// Exercise 2:
// ============
// use _.compose(), _.prop() and _.head() to retrieve the name of the first car
var nameOfFirstCar = undefined;
var firstElement = R.head;
var  

// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition
var _average = function(xs) { return reduce(add, 0, xs) / xs.length; }; // <- leave be

var averageDollarValue = function(cars) {
  var dollar_values = map(function(c) { return c.dollar_value; }, cars);
  return _average(dollar_values);
}


// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored names: e.g: sanitizeNames(["Hello World"]) //=> ["hello_world"].

var _underscore = replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize

var sanitizeNames = undefined


// Bonus 1:
// ============
// Refactor availablePrices with compose.

var availablePrices = function(cars) {
  var available_cars = _.filter(_.prop('in_stock'), cars);
  return available_cars.map(function(x){
    return accounting.formatMoney(x.dollar_value)
  }).join(', ');
}


// Bonus 2:
// ============
// Refactor to pointfree. Hint: you can use _.flip()

var fastestCar = function(cars) {
  var sorted = _.sortBy(function(car){ return car.horsepower }, cars);
  var fastest = _.last(sorted);
  return fastest.name + ' is the fastest';
}
