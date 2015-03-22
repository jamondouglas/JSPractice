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

