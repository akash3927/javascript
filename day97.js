/** @format */

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
	let nextIndex = start;
	let iterationCount = 0;

	const rangeIterator = {
		next: function () {
			let result;
			if (nextIndex < end) {
				result = { value: nextIndex, done: false };
				nextIndex += step;
				iterationCount++;
				return result;
			}
			return { value: iterationCount, done: true };
		},
	};
	return rangeIterator;
}
//Using the iterator then looks like this:

const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
	console.log(result.value); // 1 3 5 7 9
	result = it.next();
}

console.log('Iterated over sequence of size: ', result.value); // [5 numbers returned, that took interval in between: 0 to 10]

//Generator functions

function* makeRangeIterator(start = 0, end = 100, step = 1) {
	let iterationCount = 0;
	for (let i = start; i < end; i += step) {
		iterationCount++;
		yield i;
	}
	return iterationCount;
}
