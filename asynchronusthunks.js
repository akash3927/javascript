/** @format */

//The asynchronous thunks are useful to make network requests.

function fetchData(fn) {
	fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		.then((json) => fn(json));
}

const asyncThunk = function () {
	return fetchData(function getData(data) {
		console.log(data);
	});
};

asyncThunk();
