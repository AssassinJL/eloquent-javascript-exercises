for (var i = 1; i <= 100; i++) {
	if (i % 3 == 0) {
		console.log("Fizz");
	}
	else if (i % 5 == 0) {
		console.log("Buzz");
	}
	else {
		console.log(i);
	}
}
for (var i = 1; i <= 100; i++) {
	if (i % 3 == 0) {
		var s = "Fizz";
		if (i % 5 == 0) {
			s += "Buzz"
		}
		console.log(s);
	}
	else if (i % 5 == 0) {
		console.log("Buzz");
	}
	else {
		console.log(i);
	}
}