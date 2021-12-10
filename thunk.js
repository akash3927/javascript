/** @format */

//A thunk is just a function which delays the evaluation of the value.
//It doesn’t take any arguments but gives the value whenever you invoke the thunk.i.e,
//It is used not to execute now but it will be sometime in the future.Let's take a synchronous example,
//
const add = (x, y) => x + y;

const thunk = () => add(2, 3);

thunk(); // 5
