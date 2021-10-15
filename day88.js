/** @format */

function getUserById(id) {
	return new Promise((resolve, reject) => {
		resolve({
			id: id,
			username: 'admin',
		});
	});
}
function getUserById(id) {
	if (typeof id !== 'number' || id <= 0) {
		throw new Error('Invalid id argument');
	}

	return new Promise((resolve, reject) => {
		resolve({
			id: id,
			username: 'admin',
		});
	});
}
try {
	getUserById('a')
		.then((user) => console.log(user.username))
		.catch((err) => console.log(`Caught by .catch ${error}`));
} catch (error) {
	console.log(`Caught by try/catch ${error}`);
}
