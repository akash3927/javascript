/** @format */

// program to format numbers as currency string
const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

formatter.format(2500);

// program to format numbers as currency string

const number = 1234.5678;

const result = '$ ' + number.toFixed(2);

console.log(result);

// program to format numbers as currency string

const result = (2500).toLocaleString('en-US', {
	style: 'currency',
	currency: 'USD',
});

console.log(result);

// program to format numbers as currency string

const result = (1234.5678).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

console.warn('$ ' + result);
