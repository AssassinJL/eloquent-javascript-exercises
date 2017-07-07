var range = function(start, end) {
	var array = [];
	for (var i = start; i <= end; ++i) {
		array.push(i);
	}
	return array;
}
// console.log(range(1, 10)); // test for the above function
// console.log(range(11, 20));

var sum = function(array) {
	var sum = 0;
	for (var i = 0; i < array.length; ++i) {
		sum += array[i];
	}
	return sum;
}
// console.log(sum(range(1, 10))); // test for the above function
// console.log(sum(range(11, 20)));

// range with step
var range = function(start, end, step) {
	step = parseInt(step); // check if the step is a whole number, if not or no step, default is 1
	step = step == 0 || isNaN(step) == true ? 1 : step; // removed the check for undefined
	var array = [];
	if (step < 0 && start >= end) {
		for (var i = start; i >= end; i += step) {
			array.push(i);
		}
	}
	else if (step > 0 && start <= end) {		
		for (var i = start; i <= end; i += step) {
			array.push(i);
		}
	}
	else {
		array.push("error");
	}
	return array;
}
console.log(range(1, 10));
console.log(range(11, 20));
console.log(range(1, 10, 2));
console.log(range(1, 1, 2));
console.log(range(5, 2, -1));
console.log(range(2, 2, -1));
console.log(range(2, 5, -1));
console.log(range(5, 2, 1));
