"use strict";
// TypeScript Number.
// Example 1 : toExponential()
let num1 = 12;
console.log("The toExponential() value is :" + num1.toExponential());
console.log("The toExponential() value is :" + num1.toExponential(2));
// Example 2 : toFixed()
console.log("The toFixed() value is : " + num1.toFixed());
console.log("The toFixed() value is : " + num1.toFixed(3));
// Example 3 : toLocaleString()
let num2 = 12334.353;
console.log("The toLocaleString() value is : " + num2.toLocaleString());
// Example 4 : toPrecision()
let num3 = 12.534;
console.log("The toPrecision() value is : " + num3.toPrecision(1));
console.log("The toPrecision() value is : " + num3.toPrecision(3));
// Example 5 : toString()
console.log("The toString() value is : " + num1.toString());
// Example 6 : valueOf()
console.log("The valueOf() value is : " + num3.valueOf());
// TypeScript : Decision Making Statements.
/* 1. if statement
   2. if-else statement
   3. if-else-if ladder statement
   4. nested if statement.
*/
// Example 1 
let age = 18;
if (age >= 18) {
    console.log("Eligible for voting.");
}
else {
    console.log("Not eligible.");
}
// Example 2
let a = 10, b = 20;
if (a > b) {
    console.log(a + " is greater than " + b);
}
else if (b > a) {
    console.log(b + " is greater than " + a);
}
else {
    console.log("Invalid numbers.");
}
// Example 3 
let c = 30;
if (a > b && a > c) {
    console.log(a + " is greater than " + b + " and " + c);
}
else if (b > a && b > c) {
    console.log(b + " is greater than " + a + " and " + c);
}
else if (c > a && c > b) {
    console.log(c + " is greater than " + a + " and " + b);
}
else {
    console.log("Invalid Numbers.");
}
// Example 4
let marks = 98;
if (marks < 35) {
    console.log("Fail.");
}
else if (marks >= 35 && marks <= 50) {
    console.log("D grade.");
}
else if (marks >= 50 && marks <= 70) {
    console.log("C grade.");
}
else if (marks >= 70 && marks <= 80) {
    console.log("B grade.");
}
else if (marks >= 80 && marks <= 90) {
    console.log("A grade.");
}
else if (marks <= 100) {
    console.log("A+ grade.");
}
else {
    console.log("Invalid Marks.");
}
// Switch Statement Example
let grade = 'A+';
switch (grade) {
    case 'A+':
        console.log("Marks is between 90 and 100, Excellent.");
        break;
    case 'A':
        console.log("Marks is between 80 and 90, Very Good.");
        break;
    case 'B':
        console.log("Marks is between 70 and 80, Distinction.");
        break;
    case 'C':
        console.log("Marks is between 50 and 70,Good.");
        break;
    case 'D':
        console.log("Marks is between 35 and 50, not bad passed.");
        break;
    default:
        console.log("Fail");
        break;
}
