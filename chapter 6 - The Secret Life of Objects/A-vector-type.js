function Vector(x, y) {
	this.x = x;
	this.y = y;
}
Vector.prototype.plus = function(arg) {
	return new Vector(this.x + arg.x, this.y + arg.y);
};
Vector.prototype.minus = function(arg) {
	return new Vector(this.x - arg.x, this.y -arg.y);
};
Object.defineProperty(Vector.prototype, "length", {
	get: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
});

var vector1 = new Vector(2, 5);
var vector2 = new Vector(6, 9);
console.log(vector1.plus(vector2));
console.log(vector1.minus(vector2));
console.log(vector1.length);
console.log(vector2.length);