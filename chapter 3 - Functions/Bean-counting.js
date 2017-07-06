function countBs(string) {
    var i = 0, count = 0;
    while (i < string.length) {
		if (string.charAt(i++) == "B") {
			++count;
		}
    }
    return count;
}
console.log(countBs("BBteiBfdsfbbb"));

function countChar(string, c) {
    var i = 0, count = 0;
    while (i < string.length) {
        if (string.charAt(i++) == c) {
            ++count;
        }
    }
    return count;
}
console.log(countChar("bbBfBewyt", "B"));

var s = "SfsdfSssfdggf";
function countChar(string, len, count, c) { // recursive 
    if (len < 0) {
        return count;
    }
    else {
        if (string.charAt(len) == c) {
            ++count;
        }
        return countChar(string, --len, count, c)
    }
}
console.log(countChar(s, s.length - 1, 0, "s"));
