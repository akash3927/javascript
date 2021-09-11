/** @format */

// program to count the number of keys/properties in an object

const student = {
	name: 'John',
	age: 20,
	hobbies: ['reading', 'games', 'coding'],
};

let count = 0;

// loop through each key/value
for (let key in student) {
	// increase the count
	++count;
}

console.log(count);

// program to count the number of keys/properties in an object

const student = {
	name: 'John',
	age: 20,
	hobbies: ['reading', 'games', 'coding'],
};

// count the key/value
const result = Object.keys(student).length;

console.log(result);
