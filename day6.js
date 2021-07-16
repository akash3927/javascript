// program to remove a property from an object

// creating an object
const student = {
  name: "John",
  age: 20,
  hobbies: ["reading", "games", "coding"],
  greet: function () {
    console.log("Hello everyone.");
  },
  score: {
    maths: 90,
    science: 80,
  },
};

// deleting a property from an object
delete student.greet;
delete student["score"];

console.log(student);

// program to check if a key exists

const person = {
  id: 1,
  name: "John",
  age: 23,
};

// check if key exists
const hasKey = "name" in person;

if (hasKey) {
  console.log("The key exists.");
} else {
  console.log("The key does not exist.");
}
