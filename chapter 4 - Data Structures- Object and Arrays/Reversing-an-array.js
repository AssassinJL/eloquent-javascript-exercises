// var array = [1, 2, 3, 4, 5]; testing for array.reverse
// array.reverse();
// console.log(array);

function reverseArray(oldArray) {
	var newArray = [];
	for (var i = oldArray.length - 1; i >= 0; --i) {
		newArray.push(oldArray[i]);
	}
	return newArray;
}
// console.log(reverseArray([1, 2, 3, 4, 5]));
// console.log(reverseArray([5, 4, 3, 2, 1]));

function reverseArrayInPlace(array) {
	for (var i = 0, j = array.length - 1; i < array.length / 2; ++i, --j) {
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array = reverseArrayInPlace(array);
console.log(array);
var array = [6, 7, 8, 9, 10, 11];
array = reverseArrayInPlace(array);
console.log(array);

/*
	Pure functions are more useful and efficient in most situations because they only return processed values, which can be combined
	with other expressions. In some situations, they can be used for another programs that requires their processing such as computations and modifications, as can be seen from the usefulness of built-in JavaScript functions. On the other hand, side effects such as printing cannot be useful in most situations especially if design or alignment will be considered.
*/