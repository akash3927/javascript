// program to replace all instances of a character in a string

const string = 'Learning JavaScript Program';

const result = string.replace(/a/g, "A");

console.log(result);



// program to replace all instances of character in a string

const string = 'Learning JavaScript Program';

const splitString = string.split('a');

const result = splitString.join('A');

console.log(result);