// program to include constants

const a = 5;
console.log(a);

// constants are block-scoped
{
  const a = 50;
  console.log(a);
}
console.log(a);

const arr = ["work", "exercise", "eat"];
console.log(arr);

// add elements to arr array
arr[3] = "hello";
console.log(arr);

// the following code gives error
// changing the value of a throws an error
// uncomment to verify
// a = 8;

// throws an error
// const x;

// program to reverse a string

function reverseString(str) {
  // empty string
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

// take input from the user
const string = prompt("Enter a string: ");

const result = reverseString(string);
console.log(result);
