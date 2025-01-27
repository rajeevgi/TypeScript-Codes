"use strict";
function greeter(person) {
    return "Hello," + person;
}
var user = "Rajeev";
console.log(greeter(user));
function addTwoNum(a, b) {
    return a + b;
}
var sum = addTwoNum(5, 2);
console.log("The sum of two numbers is :" + sum);
// Typescript type annotations example
function display(id, name) {
    console.log("Id:" + id + ", " + "Name :" + name);
}
display(101, 'Rajeev');
