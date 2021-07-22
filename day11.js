// program to get the dimensions of an image

const img = new Image();

// get the image
img.src = "//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png";

// get height and width
img.onload = function () {
  console.log("width " + this.width);
  console.log("height " + this.height);
};

// program to trim a string

const string = "      Hello World       ";

const result = string.split(" ").join("");

console.log(result);
