/** @format */

// const ages = [1, 2, 3, 4];

// ages.filter(checkNo(5)); // Returns [32, 33, 40]
// let x;
// function checkNo(x) {
// 	if (ages.includes(x)) {
// 		console.log(ages.indexOf(x));
// 	} else {
// 		console.log('-1');
// 	}
// }
// program to sort words in alphabetical order

// take input
const string = prompt('Enter a sentence: ');

// converting to an array
const words = string.split(' ');

// sort the array elements
words.sort();

// display the sorted words
console.log('The sorted words are:');

for (const element of words) {
	console.log(element);
}
