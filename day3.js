//program to convert of kilometer into miles

// taking kilometers input from the user
const kilometers = prompt("Enter value in kilometers: ")

// conversion factor
const factor = 0.621371

// calculate miles
const miles = kilometers * factor

console.log(`${kilometers} kilometers is equal to ${miles} miles.`);


// program to convert celsius to fahrenheit
// ask the celsius value to the user 
const celsius = prompt("Enter a celsius value: ");

// calculate fahrenheit
const fahrenheit = (celsius * 1.8) + 32

// display the result
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);