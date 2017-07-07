function deepEqual(a, b) {
	if (a == null || b == null) {
		return false;
	}
	if (typeof a != "object" || typeof b != "object") {
		return a === b;
	}
	else {
		// this concept of property counter was taken from the solution found in the website, as I had difficulty figuring out
		// the solution on my own
		var p1 = 0, p2 = 0;
		for (var p in a) {
			++p1;
		}
		for (var p in b) { // this conditions are somehow mine, as can be seen that the whole condition is longer, though same sense
			if (!a.p) {
				if (deepEqual(a[p], b[p]) == false) {
					return false;
				}
			}
			++p2;
		}
		return p1 == p2;
	}
}
console.log(deepEqual(1, null));
console.log(deepEqual(1, 1)); // true
console.log(deepEqual(1, "1"));
var obj1 = {x: 1, y: {z: 3}};
var obj2 = {x: 1, y: {z: 3}};
console.log(deepEqual(obj1, obj2)); // true
var obj1 = {x: 1, y: {z: 3}};
var obj2 = {x: 1, y: {z: 4}};
console.log(deepEqual(obj1, obj2));
var obj1 = {x: 1, y: {z: 3}};
var obj2 = {x: 1, y: 5};
console.log(deepEqual(obj1, obj2));
var obj1 = {x: 1, y: {z: 3}};
var obj2 = {x: 1, y: {xx: 3}};
console.log(deepEqual(obj1, obj2));
var obj1 = {x: 1, y: {z: 3}};
var obj2 = {x: 1, y: {z: "3"}};
console.log(deepEqual(obj1, obj2));