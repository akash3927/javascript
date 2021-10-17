/** @format */

console.log('script start');

setTimeout(function () {
	console.log('setTimeout');
}, 0);

Promise.resolve()
	.then(function () {
		console.log('promise1');
	})
	.then(function () {
		console.log('promise2');
	});

console.log('script end');

//https://developpaper.com/detailed-javascript-tasks-microtasks-queues-and-code-execution-sequence/
