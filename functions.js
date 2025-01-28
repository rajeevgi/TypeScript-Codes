"use strict";
// TypeScript Functions.
Object.defineProperty(exports, "__esModule", { value: true });
// Example 1 : Named Funtion
// function definition
// function greet(){
//     console.log("Hello, function!");
// }
// // function call
// greet();
// // Example 2 : Anonymous Function
// let sumof = function(x:number, y:number){
//     return x+y;
// };
// console.log("The Sum of Two number is :"+sumof(5,4));
// Example 3 : Calculator
var readlineSync = require("readline-sync");
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    if (b === 0) {
        console.log("Divisor cannot be zero!");
        return NaN;
    }
    else {
        return a / b;
    }
}
var continueCal;
do {
    console.log("\n Calculator \n");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exit");
    var choice = readlineSync.questionInt("Enter your operation(+, -, *, /):");
    var num1 = readlineSync.questionFloat("Enter First number:");
    var num2 = readlineSync.questionFloat("Enter Second number:");
    var result = void 0;
    switch (choice) {
        case 1:
            result = add(num1, num2);
            console.log("Result : ".concat(num1, " + ").concat(num2, " = ").concat(result));
            break;
        case 2:
            result = sub(num1, num2);
            console.log("Result : ".concat(num1, " - ").concat(num2, " = ").concat(result));
            break;
        case 3:
            result = mul(num1, num2);
            console.log("Result : ".concat(num1, " * ").concat(num2, " = ").concat(result));
            break;
        case 4:
            result = div(num1, num2);
            console.log("Result : ".concat(num1, " / ").concat(num2, " = ").concat(result));
            break;
        case 5:
            console.log("Exit");
            break;
            dafault: console.log("Invalid operation!");
    }
    continueCal = Boolean(readlineSync.keyInYN("Do you want to continue calculation?"));
} while (continueCal);
