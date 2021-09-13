/** @format */

// program to loop through an object using for...in loop

const student = {
	name: 'John',
	age: 20,
	hobbies: ['reading', 'games', 'coding'],
};

// using for...in
for (let key in student) {
	let value;

	// get the value
	value = student[key];

	console.log(key + ' - ' + value);
}
// program to loop through an object using for...in loop

const student = {
	name: 'John',
	age: 20,
	hobbies: ['reading', 'games', 'coding'],
};

// using Object.entries
// using for...of loop
for (let [key, value] of Object.entries(student)) {
	console.log(key + ' - ' + value);
}
