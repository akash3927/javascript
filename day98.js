/** @format */

const timeNow = new Date();
console.log(timeNow); // shows current date and time

const time1 = new Date(0);

// epoch time
console.log(time1); // Thu Jan 01 1970 05:30:00

// 100000000000 milliseconds after the epoch time
const time2 = new Date(100000000000);
console.log(time2); // Sat Mar 03 1973 15:16:40

// ISO Date(International Standard)
const date = new Date('2020-07-01');

// the result date will be according to UTC
console.log(date); // Wed Jul 01 2020 05:45:00 GMT+0545

const date = new Date('2020-07');
console.log(date); // Wed Jul 01 2020 05:45:00 GMT+0545

const date1 = new Date('2020');
console.log(date1); // Wed Jul 01 2020 05:45:00 GMT+0545

const date = new Date('2020-07-01T12:00:00Z');
console.log(date); // Wed Jul 01 2020 17:45:00 GMT+0545

// short date format "MM/DD/YYYY"
const date = new Date('03/25/2015');
console.log(date); // Wed Mar 25 2015 00:00:00 GMT+0545

// long date format "MMM DD YYYY"
const date1 = new Date('Jul 1 2020');
console.log(date1); // Wed Jul 01 2020 00:00:00 GMT+0545

// month and day can be in any order
const date2 = new Date('1 Jul 2020');
console.log(date2); // Wed Jul 01 2020 00:00:00 GMT+0545

// month can be full or abbreviated. Also month names are insensitive.
// comma are ignored
const date3 = new Date('July 1 2020');
console.log(date3); // Wed Jul 01 2020 00:00:00 GMT+0545

const date4 = new Date('JULY, 1, 2020');
console.log(date4); // Wed Jul 01 2020 00:00:00

//new Date(year, month, day, hours, minutes, seconds, milliseconds)
const time1 = new Date(2020, 1, 20, 4, 12, 11, 0);
console.log(time1); // Thu Feb 20 2020 04:12:11

//If four numbers are passed, it represents year, month, day and hours. For example,
const time1 = new Date(2020, 1, 20, 4);
console.log(time1); // Thu Feb 20 2020 04:00:00

//JavaScript Date Methods
const timeInMilliseconds = Date.now();
console.log(timeInMilliseconds); // 1593765214488

const time = new Date();

// get day of the month
const date = time.getDate();
console.log(date); // 30

// get day of the week
const year = time.getFullYear();
console.log(year); // 2020

const utcDate = time.getUTCDate();
console.log(utcDate); // 30

const event = new Date('Feb 19, 2020 23:15:30');
// set the date
event.setDate(15);
console.log(event.getDate()); // 15

// Only 28 days in February!
event.setDate(35);

console.log(event.getDate()); // 7

//Formatting a Date
const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

// show in specific format
let monthDateYear = month + 1 + '/' + date + '/' + year;

console.log(monthDateYear); // 7/3/2020

//AutoCorrection in Date Object
const date = new Date(2008, 0, 33);
// Jan does not have 33 days

console.log(date);
