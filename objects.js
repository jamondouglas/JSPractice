'use strict';

//Objects are passed by reference

var origPerson = {firstName: 'jamon', lastName: 'douglas'};

var anotherPerson = origPerson;

anotherPerson.firstName = 'Terril';

//anotherPerson will equal objLiteral because objects are passed by reference
function compareObj(obj1 , obj2){
  return (obj1 === obj2);
}

console.log('Are objs passed by reference ?', compareObj(origPerson, anotherPerson));

//Object property descriptors
//Object descriptors are either data descriptors or accessor descriptors and 
//  both are objects

//Required keys for data and accessor descriptors: 
//  configurable configurable
//    true if and only if the type of this property descriptor may be changed 
//    and if the property may be deleted from the corresponding object.
//    Defaults to false.
//  enumerable
//    true if and only if this property shows up during enumeration of the 
//    properties on the corresponding object.
//    Defaults to false.

//data descriptor optional keys : value, writable, set, get
//  value
//    The value associated with the property. Can be any valid JavaScript 
//    value (number, object, function, etc).
//    Defaults to undefined.

//  writable
//    true if and only if the value associated with the property may be changed 
//    with an assignment operator. Defaults to false.

//  set
//    A function which serves as a setter for the property, or undefined if there 
//    is no setter. The function will receive as only argument the new value being 
//    assigned to the property. Defaults to undefined.

//  get
//    A function which serves as a getter for the property, or undefined if there 
//    is no getter. The function return will be used as the value of property.
//Defaults to undefined.