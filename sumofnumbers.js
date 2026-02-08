"use strict";
function sumFor(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function sumWhile(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}
function sumRecursion(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumRecursion(arr.slice(1));
}
function sumTheFunctionalWay(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}
console.log(`Sum using for loop: ${sumFor([1, 2, 3, 4])}`);
console.log(`Sum using while loop: ${sumWhile([1, 2, 3, 4])}`);
console.log(`Sum using recursion: ${sumRecursion([1, 2, 3, 4])}`);
console.log(`Sum using functional programming: ${sumTheFunctionalWay([1, 2, 3, 4])}`);
