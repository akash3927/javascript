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


// program to add element to an array

function addElement(arr) {

    // adding element to array
    arr.splice(0, 0, 4);
    
    console.log(arr);
}

const array = [1, 2, 3];

// calling the function
addElement(array);



// program to add element to an array

function addElement(arr) {

    // adding element to array
    arr = [4, ...arr];
    
    console.log(arr);
}

const array = [1, 2, 3];

// calling the function
addElement(arr);



// program to add element to an array

function addElement(arr) {

    // adding element to array
    arr = [4].concat(arr);
    
    console.log(arr);
}

const array = [1, 2, 3];

// calling the function
addElement(array);