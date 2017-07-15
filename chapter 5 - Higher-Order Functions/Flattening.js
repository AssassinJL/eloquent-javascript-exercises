var arrayArray = [
    [1, 2, 3, 4, 5],
    ["a", "b", "c", "d", "e"],
    [6, 7, 8, 9, 10],
    ["f", "g", "h", "i", "j"],
    [11, 12, 13, 14, 15],
    ["altair", "ezio", "connor", "edward", "aveline", "arno", "shay", "jacob", "evie", "ba yek"]
];

var array = arrayArray.reduce(function(a, b) {
    return a.concat(b);
});

console.log(array);
