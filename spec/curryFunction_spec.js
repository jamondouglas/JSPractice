
var curryFunc = require('../curryFunction');
function add(x,y){return x+y;}

describe("Curry Function", function(){
	it(' should return a function',function(){
		expect(curryFunc).toEqual(jasmine.any(Function));
	});

	it('should return a function if curried func not provided number of args(function.length)', function(){
		var addCurrFunc = curryFunc(add);
		expect(addCurrFunc(5)).toEqual(jasmine.any(Function));
	});
});