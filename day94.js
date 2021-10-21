/** @format */

//1.1 for..of cycle

const colors = ['blue', 'green', 'white'];
for (const color of colors) {
	console.log(color);
}
// 'blue'
// 'green'
// 'white'

//1.2 for cycle
const colors = ['blue', 'green', 'white'];
for (let index = 0; index < colors.length; index++) {
	const color = colors[index];
	console.log(color);
}
// 'blue'
// 'green'
// 'white'

//1.3 array.forEach() method
const colors = ['blue', 'green', 'white'];
colors.forEach(function callback(value, index) {
	console.log(value, index);
});
// 'blue', 0
// 'green', 1
// 'white', 2

//2.1 array.map() method
const numbers = [0, 2, 4];
const newNumbers = numbers.map(function increment(number) {
	return number + 1;
});
newNumbers; // => [1, 3, 5]

//2.2 Array.from() function
const numbers = [0, 2, 4];
const newNumbers = Array.from(numbers, function increment(number) {
	return number + 1;
});
newNumbers; // => [1, 3, 5]

//3.1 array.reduce() method
const numbers = [2, 0, 4];
function summarize(accumulator, number) {
	return accumulator + number;
}
const sum = numbers.reduce(summarize, 0);
sum; // => 6

//4.1 array.concat() method
const heroes = ['Batman', 'Robin'];
const villains = ['Joker', 'Bane'];
const everyone = heroes.concat(villains);
everyone; // => ['Batman', 'Robin', 'Joker', 'Bane']

//4.2 Spread operator
const heroes = ['Batman', 'Catwoman'];
const villains = ['Joker', 'Bane'];
const names = [...heroes, ...villains];
names; // => ['Batman', 'Catwoman', 'Joker', 'Bane']

//5.1 array.slice() method
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const heroes = names.slice(0, 2);
const villains = names.slice(2);
heroes; // => ['Batman', 'Catwoman']
villains; // => ['Joker', 'Bane']

//6.1 Spread operator
const colors = ['white', 'black', 'gray'];
const clone = [...colors];
clone; // => ['white', 'black', 'gray']
colors === clone; // => false

//6.2 array.concat() method
const colors = ['white', 'black', 'gray'];
const clone = [].concat(colors);
clone; // => ['white', 'black', 'gray']
colors === clone; // => false

//6.3 array.slice() method
const colors = ['white', 'black', 'gray'];
const clone = colors.slice();
clone; // => ['white', 'black', 'gray']
colors === clone; // => false

//7.1 array.includes() method
const numbers = [1, 2, 3, 4, 5];
numbers.includes(2); // => true
numbers.includes(99); // => false

//7.2 array.find() method
const numbers = [1, 2, 3, 4, 5];
function isEven(number) {
	return number % 2 === 0;
}
const evenNumber = numbers.find(isEven);
evenNumber; // => 2

//7.3 array.indexOf() method
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const index = names.indexOf('Joker');
index; // => 2

//8.1 array.every() method
const evens = [0, 2, 4, 6];
const numbers = [0, 1, 4, 6];
function isEven(number) {
	return number % 2 === 0;
}
evens.every(isEven); // => true
numbers.every(isEven); // => false

//8.2 array.some() method
const numbers = [1, 5, 7, 10];
const odds = [1, 3, 3, 3];
function isEven(number) {
	return number % 2 === 0;
}
numbers.some(isEven); // => true
odds.some(isEven); // => false

//9.1 array.filter()
const numbers = [1, 5, 7, 10];
function isEven(number) {
	return number % 2 === 0;
}
const evens = numbers.filter(isEven);
evens; // => [10]

//10.1 array.push() method
const names = ['Batman'];
names.push('Joker');
names; // ['Batman', 'Joker']

//10.2 array.unshift() method
const names = ['Batman'];
names.unshift('Catwoman');
names; // ['Catwoman', 'Batman']

//10.3 Spread operator
const names = ['Joker', 'Bane'];
const names2 = [...names, 'Batman'];
names2; // => ['Joker', 'Bane', 'Batman'];

//11.3 array.splice() method
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names.splice(1, 2);
names; // => ['Batman', 'Bane']

//11.4 Spread operator
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const fromIndex = 1;
const removeCount = 2;
const newNames = [
	...names.slice(0, fromIndex),
	...names.slice(fromIndex + removeCount),
];
newNames; // => ['Batman', 'Bane']

//12.1 array.length property
const colors = ['blue', 'green', 'black'];
colors.length = 0;
colors; // []

//12.2 array.splice() method
const colors = ['blue', 'green', 'black'];
colors.splice(0);
colors; // []

//13.1 array.fill() method
const numbers = [1, 2, 3, 4];
numbers.fill(0);
numbers; // => [0, 0, 0, 0]

//13.2 Array.from() function
const length = 4;
const emptyObjects = Array.from(Array(length), function () {
	return {};
});
emptyObjects; // [{}, {}, {}, {}]

//14.1 array.flat() method
const arrays = [0, [1, 3, 5], [2, 4, 6]];
const flatArray = arrays.flat();
flatArray; // [0, 1, 3, 5, 2, 4, 6]

//15.1 array.sort() method
const letters = ['B', 'C', 'A'];
letters.sort();
letters; // => ['A', 'B', 'C']

const numbers = [4, 3, 1, 2];
function compare(n1, n2) {
	if (n1 % 2 === 0 && n2 % 2 !== 0) {
		return -1;
	}
	if (n1 % 2 !== 0 && n2 % 2 === 0) {
		return 1;
	}
	return 0;
}
numbers.sort(compare);
numbers; // => [4, 2, 3, 1]
