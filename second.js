// Arrays
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Example 1 : Array creation using square brackets
var fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits);
// Example 2 : Array creation using generic array type
var mobiles = ['Samsung', 'Redmi', 'Oppo', 'Vivo', 'Motorola', 'Apple'];
console.log(mobiles);
// Example 3 : Array Objects
var arr = new Array('Hello', 'JavaTpoint', 'Typescript');
// traversing the array using simple for loop
for (var i = 0; i < arr.length; i++) {
    console.log("\t" + arr[i]);
}
// traversing an array using for in loop
for (var i in arr) {
    console.log(arr[i]);
}
// We can pass arrays to functions by specifying the array name without an index.
var array = new Array('Hello', 'Developer');
function displayArray(arr_values) {
    for (var i = 0; i < array.length; i++) {
        console.log(arr_values[i]);
    }
}
displayArray(array);
// Spread Operator Examples
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
// create new Array from existing array.
var copyArray = __spreadArray([], arr1, true);
console.log("The Copied Array Values are : " + copyArray);
// create new array from existing array with new Elements.
var newArray = __spreadArray(__spreadArray([], arr1, true), [7, 8], false);
console.log("The New Array Elements are : " + newArray);
// create array by merging two arrays.
var mergeArray = __spreadArray(__spreadArray([], arr1, true), arr2, true);
console.log("The Merge array elements are:", mergeArray);
