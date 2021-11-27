/** @format */

//How do you map the array values without using map method

const countries = [
	{ name: 'India', capital: 'Delhi' },
	{ name: 'US', capital: 'Washington' },
	{ name: 'Russia', capital: 'Moscow' },
	{ name: 'Singapore', capital: 'Singapore' },
	{ name: 'China', capital: 'Beijing' },
	{ name: 'France', capital: 'Paris' },
];

const cityNames = Array.from(countries, ({ capital }) => capital);
console.log(cityNames); // ['Delhi, 'Washington', 'Moscow', 'Singapore', 'Beijing', 'Paris']
