/** @format */

//First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.
const firstOrder = () => console.log('I am a first order function!');

//Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

const firstOrderFunc = () => console.log('Hello, I am a First order function');
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);
