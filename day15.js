// program to validate an email address

function validateEmail(email_id) {
  const regex_pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex_pattern.test(email_id)) {
    console.log("The email address is valid");
  } else {
    console.log("The email address is not valid");
  }
}

validateEmail("abc123@gmail.com");
validateEmail("hello@com");

// program to check if a variable is of function type

function testVariable(variable) {
  if (variable instanceof Function) {
    console.log("The variable is of function type");
  } else {
    console.log("The variable is not of function type");
  }
}

const count = true;
const x = function () {
  console.log("hello");
};

testVariable(count);
testVariable(x);
