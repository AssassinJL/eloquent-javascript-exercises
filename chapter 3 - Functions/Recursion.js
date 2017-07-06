// function isEven(num) { // this function is not suitable for negative values, as it overflows the stack
//     if (num == 0) { // because num will never come to 0 or 1
//         return true;
//     }
//     else if (num == 1) {
//         return false;
//     }
//     else {
//         return isEven(num - 2);
//     }
// }
function isEven(num) {
    // num = Math.abs(num); // to be suitable for negative values, we can find the absolute of the number using Math.abs
    if (num < 0) { // or we can manually set it using a condition
        num = -num;
    }
    if (num == 0) {
        return true;
    }
    else if (num == 1) {
        return false;
    }
    else {
        return isEven(num - 2);
    }
}
console.log(isEven(90));
console.log(isEven(69));
console.log(isEven(-1));
