// program to compare two arrays

function compareArrays(arr1, arr2) {
  // compare arrays
  const result = JSON.stringify(arr1) == JSON.stringify(arr2);

  // if result is true
  if (result) {
    console.log("The arrays have the same elements.");
  } else {
    console.log("The arrays have different elements.");
  }
}

const array1 = [1, 3, 5, 8];
const array2 = [1, 3, 5, 8];

compareArrays(array1, array2);

// program to extract value as an array from an array of objects

function compareArrays(arr1, arr2) {
  // check the length
  if (arr1.length != arr2.length) {
    return false;
  } else {
    let result = false;

    // comparing each element of array
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      } else {
        result = true;
      }
    }
    return result;
  }
}

const array1 = [1, 3, 5, 8];
const array2 = [1, 3, 5, 8];

const result = compareArrays(array1, array2);

// if result is true
if (result) {
  console.log("The arrays have the same elements.");
} else {
  console.log("The arrays have different elements.");
}
