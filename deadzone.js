/** @format */

//The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const
//keywords, but not with var. In ECMAScript 6, accessing a let or const variable before its declaration (within its
//scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding
//and its declaration, is called the temporal dead zone.

function somemethod() {
	console.log(counter1); // undefined
	console.log(counter2); // ReferenceError
	var counter1 = 1;
	let counter2 = 2;
}
