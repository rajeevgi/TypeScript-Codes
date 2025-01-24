// String Examples

// Example 1 : Create a string variable and assign a value.
let uname = new String("Hello,rajeev!");
console.log("The Name is : "+uname);
console.log("Length of string is : "+uname.length);

// Example 2 : Create a string variables and use template literal to show value of it.
let username : string = "Rajeev";
let gender : string = "Male";
let emplDetails = `\n Name of Employee : ${username}, Gender : ${gender}`;
console.log("The Employee Details : "+emplDetails);

// Example 3 : string literal type examples
// 1. Variable Assignment
type Pet = 'Cat' | 'Dog' | 'Rabbit';

let pet : Pet;

if(pet = 'Cat'){
    console.log("Correct!");
}else {
    console.log("Invalid Input!");
}

// 2. Function parameter.
type Fruits = 'Apple' | 'Banana' | 'Kiwi';

function fruitsName(fruitsName : Fruits) : void{
    console.log(fruitsName);
}

fruitsName('Apple');
// fruitsName('Orange');

// Example 4 : string methods

// 1. charAt()
let originalStr : string = 'Rajeev';
let reversedStr : string = '';

for( let i = originalStr.length-1; i >= 0; i--){
    reversedStr += originalStr.charAt(i);
}
console.log("The Original String is : "+originalStr);
console.log("The Reversed String is :"+reversedStr);


// 2. concat()
let str1 : string = 'Hello,';
let str2 : string = 'developer!';

let newStr = str1.concat(str2);
console.log("The Concatenated string is : "+newStr);

// 3. replace()
let str3 : string = 'Rajeev';

let replacedValue = str3.replace('e', 'i');
console.log("The Original Value is : "+ str3);
console.log("The Replaced value is : "+replacedValue);

// 4. replaceAll()
// let str4 : string = 'Sanjeev';
// let reValue = str4.replaceAll('Sanjeev', 'Sanjiv');
// console.log("The Original Value is : "+ str4);
// console.log("The Replaced value is : "+reValue);

