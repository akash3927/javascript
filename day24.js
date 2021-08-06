// program to get a random item from an array

function getRandomItem(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

const array = [1, "hello", 5, 8];

const result = getRandomItem(array);
console.log(result);
