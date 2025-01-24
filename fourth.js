// Tuples Examples
// Example 1 : creation of a simple tuple. 
var Employees = [101, "Rajeev Gupta", "Developer", 25];
console.log("The Tuple Elements are : ", Employees);
// Example 2 : converting to toString().
var tostrVal = Employees.toString();
console.log("The toString of Tuple is : ", tostrVal);
// Example 3 : removing item or elements from tuple using pop().
console.log("The Tuple Before Pop() is : ", Employees);
var removedVal = Employees.pop();
console.log("The Tuple After Pop() is : ", Employees);
console.log("The Removed Item from Tuple is : ", removedVal);
// Example 4 : adding new element in tuple using push().
console.log("The Tuple Before Push() : ", Employees);
Employees.push("Kalamboli");
console.log("The Tuple After Push() : ", Employees);
// Example 5 : passing tuple  to a function.
console.log("The Tuple is pass in a function.");
function displayTuple(tuple_val) {
    for (var i = 0; i < Employees.length; i++) {
        console.log(tuple_val[i]);
    }
}
displayTuple(Employees);
