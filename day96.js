/** @format */

// constructor function
function Person() {
	(this.name = 'John'), (this.age = 23);
}

// creating objects
const person1 = new Person();
const person2 = new Person();

//Prototype Inheritance
// constructor function
function Person() {
	(this.name = 'John'), (this.age = 23);
}

// creating objects
const person1 = new Person();
const person2 = new Person();

// adding property to constructor function
Person.prototype.gender = 'male';

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);

//Add Methods to a Constructor Function Using Prototype
// constructor function
function Person() {
	(this.name = 'John'), (this.age = 23);
}

// creating objects
const person1 = new Person();
const person2 = new Person();

// adding a method to the constructor function
Person.prototype.greet = function () {
	console.log('hello' + ' ' + this.name);
};

person1.greet(); // hello John
person2.greet(); // hello John

///Changing Prototype
// constructor function
function Person() {
	this.name = 'John';
}

// add a property
Person.prototype.age = 20;

// creating an object
const person1 = new Person();

console.log(person1.age); // 20

// changing the property value of prototype
Person.prototype = { age: 50 };

// creating new object
const person3 = new Person();

console.log(person3.age); // 50
console.log(person1.age); // 20

//JavaScript Prototype Chaining
function Person() {
	this.name = 'John';
}

// adding property
Person.prototype.name = 'Peter';
Person.prototype.age = 23;

const person1 = new Person();

console.log(person1.name); // John
console.log(person1.age); // 23

//Note: You can also access the prototype property of a constructor function from an object.
function Person() {
	this.name = 'John';
}

// adding a prototype
Person.prototype.age = 24;

// creating object
const person = new Person();

// accessing prototype property
console.log(person.__proto__); // { age: 24 }
