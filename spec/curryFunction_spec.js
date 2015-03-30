
var curryFunc = require('../curryFunction');
function add(x,y){return x+y;}

describe("Curry Function", function(){
	it(' should return a function',function(){
		expect(curryFunc).toEqual(jasmine.any(Function));
	});

	it('should know how many arguments a function takes',function(){
		var addCurried = curryFunc(add);
		expect(addCurried.getNumOfArgs()).toBe(2);
	});
});