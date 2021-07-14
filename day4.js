// program to empty an array

function emptyArray(arr) {
  // substituting new array
  arr = [];

  return arr;
}

const array = [1, 2, 3];
console.log(array);

// call the function
const result = emptyArray(array);
console.log(result);

// program to add element to an array

function addElement(arr) {
  // adding new array element
  arr.unshift(4);

  console.log(arr);
}

const array = [1, 2, 3];

// calling the function
// passing array argument
addElement(array);
