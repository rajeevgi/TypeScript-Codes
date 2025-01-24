// String Examples
// Example 1 : Create a string variable and assign a value.
var uname = new String("Hello,rajeev!");
console.log("The Name is : " + uname);
console.log("Length of string is : " + uname.length);
// Example 2 : Create a string variables and use template literal to show value of it.
var username = "Rajeev";
var gender = "Male";
var emplDetails = "\n Name of Employee : ".concat(username, ", Gender : ").concat(gender);
console.log("The Employee Details : " + emplDetails);
var pet;
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
var originalStr = 'Rajeev';
var reversedStr = '';
for (var i = originalStr.length - 1; i >= 0; i--) {
    reversedStr += originalStr.charAt(i);
}
console.log("The Original String is : " + originalStr);
console.log("The Reversed String is :" + reversedStr);
// 2. concat()
var str1 = 'Hello,';
var str2 = 'developer!';
var newStr = str1.concat(str2);
console.log("The Concatenated string is : " + newStr);
// 3. replace()
var str3 = 'Rajeev';
var replacedValue = str3.replace('e', 'i');
console.log("The Original Value is : " + str3);
console.log("The Replaced value is : " + replacedValue);
// 4. replaceAll()
var str4 = 'Sanjeev';
var reValue = str4.replaceAll('Sanjeev', 'Sanjiv');
console.log("The Original Value is : " + str4);
console.log("The Replaced value is : " + reValue);
