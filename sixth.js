"use strict";
// String Examples
// Example 1 : Create a string variable and assign a value.
let uname = new String("Hello,rajeev!");
console.log("The Name is : " + uname);
console.log("Length of string is : " + uname.length);
// Example 2 : Create a string variables and use template literal to show value of it.
let username = "Rajeev";
let gender = "Male";
let emplDetails = `\n Name of Employee : ${username}, Gender : ${gender}`;
console.log("The Employee Details : " + emplDetails);
let pet;
if (pet = 'Cat') {
    console.log("Correct!");
}
else {
    console.log("Invalid Input!");
}
function fruitsName(fruitsName) {
    console.log(fruitsName);
}
fruitsName('Apple');
// fruitsName('Orange');
// Example 4 : string methods
// 1. charAt()
let originalStr = 'Rajeev';
let reversedStr = '';
for (let i = originalStr.length - 1; i >= 0; i--) {
    reversedStr += originalStr.charAt(i);
}
console.log("The Original String is : " + originalStr);
console.log("The Reversed String is :" + reversedStr);
// 2. concat()
let str1 = 'Hello,';
let str2 = 'developer!';
let newStr = str1.concat(str2);
console.log("The Concatenated string is : " + newStr);
// 3. replace()
let str3 = 'Rajeev';
let replacedValue = str3.replace('e', 'i');
console.log("The Original Value is : " + str3);
console.log("The Replaced value is : " + replacedValue);
// 4. replaceAll()
// let str4 : string = 'Sanjeev';
// let reValue = str4.replaceAll('Sanjeev', 'Sanjiv');
// console.log("The Original Value is : "+ str4);
// console.log("The Replaced value is : "+reValue);
