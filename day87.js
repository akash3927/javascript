/** @format */

// function
function greet(name, callback) {
	console.log('Hi' + ' ' + name);
	callback();
}

// callback function
function callMe() {
	console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

// Callback Function Example
function greet(name, myFunction) {
	console.log('Hello world');

	// callback function
	// executed only after the greet() is executed
	myFunction(name);
}

// callback function
function sayName(name) {
	console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);

//  program that shows the delay in execution

function greet() {
	console.log('Hello world');
}

function sayName(name) {
	console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 2000);
sayName('John');
