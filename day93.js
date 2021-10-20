/** @format */

(function () {
	var userName = 'Steve';

	function display(name) {
		alert('MyScript2.js: ' + name);
	}

	display(userName);
})();

//example 2

var userName = 'Bill';

(function (name) {
	function display(name) {
		alert('MyScript2.js: ' + name);
	}

	display(name);
})(userName);
