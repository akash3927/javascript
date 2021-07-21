// program to pass a function as a parameter

function greet() {
  return "Hello";
}

// passing function greet() as a parameter
function name(user, func) {
  // accessing passed function
  const message = func();

  console.log(`${message} ${user}`);
}

name("John", greet);
name("Jack", greet);
name("Sara", greet);

// program to check if a number is a float or integer value

function checkNumber(x) {
  // check if the passed value is a number
  if (typeof x == "number" && !isNaN(x)) {
    // check if it is integer
    if (Number.isInteger(x)) {
      console.log(`${x} is integer.`);
    } else {
      console.log(`${x} is a float value.`);
    }
  } else {
    console.log(`${x} is not a number`);
  }
}

checkNumber("hello");
checkNumber(44);
checkNumber(3.4);
checkNumber(-3.4);
checkNumber(NaN);
