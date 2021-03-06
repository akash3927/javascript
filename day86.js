/** @format */

function pow(x, n) {
	let result = 1;

	// multiply result by x n times in the loop
	for (let i = 0; i < n; i++) {
		result *= x;
	}

	return result;
}

alert(pow(2, 3)); // 8

function pow(x, n) {
	if (n == 1) {
		return x;
	} else {
		return x * pow(x, n - 1);
	}
}

alert(pow(2, 3)); // 8
