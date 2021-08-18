// program to append an object to an array

function insertObject(arr, obj) {

    // append object
    arr.push(obj);
    
    console.log(arr);
}

// original array
let array = [1, 2, 3];

// object to add
let object = {x: 12, y: 8};

// call the function
insertObject(array, object);


// program to append an object to an array

function insertObject(arr, obj) {

    // find the last index
     let index = arr.length;
 
     // appending object to end of array
     arr.splice(index, 0, object);
     
     console.log(arr);
 }
 
 // original array
 let array = [1, 2, 3];
 
 // object to add
 let object = {x: 12, y: 8};
 
 // call the function
 insertObject(array, object);


 // program to append an object to an array

function insertObject(arr, obj) {

    // append object
     arr = [...arr, object];
     
     console.log(arr);
 }
 
 // original array
 let array = [1, 2, 3];
 
 // object to add
 let object = {x: 12, y: 8};
 
 // call the function
 insertObject(array, object);