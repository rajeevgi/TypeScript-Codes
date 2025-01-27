"use strict";
// Array Methods Example
// Example 1 : concat()
let array1 = [1, 2, 3];
console.log("The Array 1 Elements : ", array1);
let array2 = [4, 5, 6];
console.log("The Array 2 Elements : ", array2);
console.log("The Concatenation elements are : ", array1.concat(array2));
// Example 2 : pop()
array1.pop();
console.log("The array1 element after pop method :", array1);
// Example 3 : push()
array1.push(7);
console.log("The  array1 elements after push method : ", array1);
// Example 4 : reverse()
array1.reverse();
console.log("The reverse of an array1 is : ", array1);
// Example 5 : shift()
array2.shift();
console.log("The array2 elements after shift method : ", array2);
// Example 6 : slice()
array2.push(8, 9);
console.log("The array2 elemets is:", array2);
console.log("The sliced Elements are : ", array2.slice(0, 2));
// Example 7 : sort()
console.log("The array2 elements before sorting : ", array2);
array2.sort((a, b) => b - a); // for descending order.
console.log("The array2 elements after sorting: ", array2);
// Example 8 : toString()
console.log("The array 1 before toString() :", array1);
const toStrValue = array1.toString();
console.log("The array 1 After toString() :", toStrValue);
// Example 9 : splice()
console.log("The Array1 before splice() : ", array1);
array1.splice(1, 7);
console.log("The Array1 After splice() : ", array1);
// Example 10 : unshift()
console.log("The Array1 elements before unshift(): ", array1);
array1.unshift(6);
console.log("The Array1 elements after unshift(): ", array1);
