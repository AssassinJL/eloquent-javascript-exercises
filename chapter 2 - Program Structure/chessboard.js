var s = ""; // maybe width and heigth must be the same
var w = Number(prompt("enter width : ", 8));
var h = Number(prompt("enter height : ", 8));
for (var i = 1; i <= h; ++i) {
	for (var j = 1; j <= w; ++j) {
		if (i % 2 != 0) {
			if (j % 2 != 0) {
				s += " ";
			}
			else {
				s += "#";
			}
		}
		else {
			if (j % 2 != 0) {
				s += "#";
			}
			else {
				s += " ";
			}
		}
	}
	s += "\n"
}
console.log(s);