/** @format */

function simpleClockAngle(num) {
	// we got 6 because 360/60 = 6
	// 360 represents the full number of a degrees in a circle and
	// 60 is the number of minutes on a clock, so dividing these two numbers
	// gives us the number of degrees for one minute
	return 6 * num;
}

simpleClockAngle(15);
