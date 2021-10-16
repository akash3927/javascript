/** @format */

function resolveAfter2Seconds() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('resolved');
		}, 2000);
	});
}

async function asyncCall() {
	console.log('calling');
	const result = await resolveAfter2Seconds();
	console.log(result);
	// expected output: "resolved"
}

asyncCall();

//Async with a function expression in JavaScript
function resolveAfter2Seconds() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('resolved');
		}, 2000);
	});
}
let asyncCall = async function () {
	console.log('calling');
	const result = await resolveAfter2Seconds();
	console.log(result);
	// expected output: "resolved"
};
console.log('first');
asyncCall();
console.log('second');

//Async with an arrow function in JavaScript
function resolveAfter2Seconds() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('resolved');
		}, 2000);
	});
}
let asyncCall = async () => {
	console.log('calling');
	const result = await resolveAfter2Seconds();
	console.log(result);
	// expected output: "resolved"
};
console.log('first');
asyncCall();
console.log('second');

//JavaScript Async with class methods
function resolveAfter2Seconds() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('resolved');
		}, 2000);
	});
}
class Greeter {
	async asyncCall() {
		console.log('calling');
		const result = await resolveAfter2Seconds();
		console.log(result);
		// expected output: "resolved"
	}
}
let gtr = new Greeter();
console.log('first');
gtr.asyncCall();
console.log('second');

///JavaScript Async Await Error handling

function resolveAfter2Seconds(value) {
	return new Promise((resolve, reject) => {
		if (value === undefined) {
			reject(new Error('invalide value argument'));
		}
		setTimeout(() => {
			resolve(`resolve: ${value}`);
		}, 2000);
	});
}
async function asyncCall() {
	try {
		console.log('calling');
		const result = await resolveAfter2Seconds();
		console.log(result);
	} catch (error) {
		console.log(`caught by try/catch: ${error} `);
	}
}
asyncCall();

//Chaining Promises with try/catch

function resolveAfter2Seconds(value) {
	return new Promise((resolve, reject) => {
		if (value === undefined) {
			reject(new Error('invalide value argument'));
		}
		setTimeout(() => {
			resolve(`resolve: ${value}`);
		}, 2000);
	});
}
async function asyncCall() {
	try {
		console.log('calling');
		const result1 = await resolveAfter2Seconds(1);
		const result = await resolveAfter2Seconds();
		console.log(result);
	} catch (error) {
		console.log(`caught by try/catch: ${error} `);
	}
}
asyncCall();

//Catch() method

function resolveAfter2Seconds(value) {
	return new Promise((resolve, reject) => {
		if (value === undefined) {
			reject(new Error('invalide value argument'));
		}
		setTimeout(() => {
			resolve(`resolve: ${value}`);
		}, 2000);
	});
}
async function asyncCall() {
	console.log('calling');
	const result = await resolveAfter2Seconds();
	console.log(result);
}
asyncCall().catch((error) => console.log(`caught by .catch: ${error} `));

//Unhandled rejected by missing the catch() method

function resolveAfter2Seconds(value) {
	return new Promise((resolve, reject) => {
		if (value === undefined) {
			reject('invalide value argument');
		}
		setTimeout(() => {
			resolve(`resolve: ${value}`);
		}, 2000);
	});
}
async function asyncCall() {
	console.log('calling');
	const result = await resolveAfter2Seconds();
	console.log(result);
}
asyncCall();

//Async/Await works well with Promise.all() method in JavaScript

function resolveAfter2Seconds(value) {
	return new Promise((resolve, reject) => {
		if (value === undefined) {
			reject('invalide value argument');
		}
		setTimeout(() => {
			resolve(`resolve: ${value}`);
		}, 2000);
	});
}
async function asyncCall() {
	// wait for the array of results
	let result = await Promise.all([
		resolveAfter2Seconds(10),
		resolveAfter2Seconds(12),
	]);
	console.log(result);
}
asyncCall();
