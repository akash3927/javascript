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

// program to remove duplicate value from an array

function getUnique(arr) {
  let uniqueArr = [];

  // loop through array
  for (let i of arr) {
    if (uniqueArr.indexOf(i) === -1) {
      uniqueArr.push(i);
    }
  }
  console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
// passing array argument
getUnique(array);
