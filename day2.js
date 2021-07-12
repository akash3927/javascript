//calcualte area of tringle

let a =3.14;
function area(r){
    console.log(a*r*r)
}
area(3);

//javascript problam to swap the variables

// let c=6
// let d =8
//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);