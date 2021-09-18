/** @format */

// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {
	// converting first letter to uppercase
	const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

	return capitalized;
}

// take input
const string = prompt('Enter a string: ');

const result = capitalizeFirstLetter(string);

console.log(result);

// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {
	// converting first letter to uppercase
	const capitalized = str.replace(/^./, str[0].toUpperCase());

	return capitalized;
}

// take input
const string = prompt('Enter a string: ');

const result = capitalizeFirstLetter(string);

console.log(result);
