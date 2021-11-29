/** @format */

// A Pure function is a function where the return value is only determined by its arguments without any side
//effects. i.e, If you call a function with the same arguments 'n' number of times and 'n' number of places in the
//application then it will always return the same value.
//Impure
let numberArray = [];
const impureAddNumber = (number) => numberArray.push(number);
//Pure
const pureAddNumber = (number) => (argNumberArray) =>
	argNumberArray.concat([number]);

//Display the results
console.log(impureAddNumber(6)); // returns 1
console.log(numberArray); // returns [6]
console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
console.log(numberArray); // returns [6]
