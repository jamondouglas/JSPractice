var curryFunc = require('../curryFunction');


describe("Curry Function", function(){
	it(' should return a function',function(){
		expect(curryFunc).toEqual(jasmine.any(Function));
	});
});