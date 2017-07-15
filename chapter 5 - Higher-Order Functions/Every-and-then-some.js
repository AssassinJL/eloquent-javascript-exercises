// built-in array.every methods
console.log([2, 4, 6, 8, 10].every(function(num) {
	return num % 2 == 0; // checks if all elements are even
}));
console.log([2, 4, 6, 8, 11].every(function(num) {
	return num % 2 == 0; // checks if all elements are even
}));

function every(array, test) {
	for (var i = 0; i < array.length; ++i) {
		if (!test(array[i])) {
			return false;
		}
	}
	return true;
}

console.log(every([2, 4, 6, 8, 10], function(num) {
	return num % 2 == 0; // checks if all elements are even
}));
console.log(every([2, 4, 6, 8, 11], function(num) {
	return num % 2 == 0; // checks if all elements are even
}));

console.log(every(["apple", "banana", "orange"], function(string) {
	return string.length == 6; // checks if all elements has length of six
}));
console.log(every(["apples", "banana", "orange"], function(string) {
	return string.length == 6; // checks if all elements has length of six
}));

// built-in array.some method
console.log([5, 10, 15].some(function(num) {
	return num % 3 == 0 && num % 5 == 0; // checks if there is an element having a factor of 3 and 5
}));
console.log([5, 10, 15, 30].some(function(num) {
	return num % 3 == 0 && num % 5 == 0; // checks if there is an element having a factor of 3 and 5
}));
console.log([5, 10, 20].some(function(num) {
	return num % 3 == 0 && num % 5 == 0; // checks if there is an element having a factor of 3 and 5
}));

function some(array, test) {
	for (var i = 0; i < array.length; ++i) {
		if (test(array[i])) {
			return true;
		}
	}
	return false;
}

console.log(some([5, 10, 15], function(num) {
	return num % 3 == 0 && num % 5 == 0; // checks if there is an element having a factor of 3 and 5
}));
console.log(some([5, 10, 15, 30], function(num) {
	return num % 3 == 0 && num % 5 == 0; // checks if there is an element having a factor of 3 and 5
}));
console.log(some([5, 10, 20], function(num) {
	return num % 3 == 0 && num % 5 == 0; // checks if there is an element having a factor of 3 and 5
}));
console.log(some([5, 10, 20], function(num) {
	return num < 10; // checks if there is an element less than 10
}));
console.log(some([11, 10, 20], function(num) {
	return num < 10; // checks if there is an element less than 10
}));