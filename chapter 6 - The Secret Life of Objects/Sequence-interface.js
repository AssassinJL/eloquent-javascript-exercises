/*
the idea was taken from the solution in the website with few changes:
	1. 'next' which is equivalent to 'hasNextElement' only checks if there is a next element but doesn't update the position
	2. 'current' which is equivalent to 'currentElement' does the updating of position before the returning of the element
	3  'resetIteration' is added to set the position back to the beginning
	4. some properties are changed or added
*/

function logFive(sequence) {
	sequence.resetIteration();
	var count = 0;
  while(count < 5 && sequence.hasNextElement()) {
		console.log(sequence.currentElement());
		++count;
	}
}

function ArraySeq(array) {
	this.array = array;
	this.pos = -1;
}
ArraySeq.prototype.hasNextElement = function() {
	if (this.pos + 1 <= this.array.length - 1) {
		return true;
	}
	return false;
}
ArraySeq.prototype.currentElement = function() {
	return this.array[++this.pos]
}
ArraySeq.prototype.resetIteration = function() {
	this.pos = -1;
}

function RangeSeq(from, to) {
	this.from = from - 1;
	this.to = to;
	this.pos = this.from;
}
RangeSeq.prototype.hasNextElement = function() {
  if (this.pos + 1 <= this.to) {
		return true;
	}
	return false;
}
RangeSeq.prototype.currentElement = function() {
	return ++this.pos;
}
RangeSeq.prototype.resetIteration = function() {
	this.pos = this.from;
}

var arraySeq = new ArraySeq([1, 2, 3, 4]);
logFive(arraySeq);
logFive(arraySeq);
var rangeSeq = new RangeSeq(100, 1000);
logFive(rangeSeq);
logFive(rangeSeq);