// var list = {
	// value: 1,
	// rest: {
		// value: 2,
		// rest: {
			// value: 3,
			// rest: null
		// }
	// }
// };

function arrayToList(array) {
	var list = {
		value: array[array.length - 1],
		rest: null
	};
	for (var i = array.length - 2; i >= 0; --i) {
		list = {
			value: array[i],
			rest: list
		};
	}
	return list;
}
var array = [1, 2, 3];
var list = arrayToList(array);
// console.log(list);

function listToArray(list) {
	var array = [];
	while (list != null) {
		array.push(list.value);
		list = list.rest;
	}
	return array;
}
array = listToArray(list);
console.log(array);

function prepend(element, oldList) {
	var newList = {
		value: element,
		rest: oldList
	};
	return newList;
}
list = prepend(69, list);
array = listToArray(list);
console.log(array);

var nth = function(list, position) {
	while (list != null) {
		if (position == 1) {
			return list.value;
		}
		list = list.rest;
		--position;
	}
	return undefined;
}
console.log(nth(list, 3));
console.log(nth(list, 5));
console.log(nth(list, 2));
console.log(nth(list, 4));
console.log(nth(list, 1));
console.log(nth(list, 6));

// recursive version
var nth = function(list, position) {
	if (list == null) {
		return undefined;
	}
	else if (position == 1) {
		return list.value;
	}
	else {
		return nth(list.rest, --position);
	}
}
console.log(nth(list, 3));
console.log(nth(list, 5));
console.log(nth(list, 2));
console.log(nth(list, 4));
console.log(nth(list, 1));
console.log(nth(list, 6));