// Loop Examples

// 1. while loop examples.

// Example - 1: Print numbers from 1 to 10.

// var i = 1;

// var num = 10;

// while(i <= num){
//     console.log("\t"+i);
//     i++;
// }

// Example - 2: Print table of a given number.
// var i = 1;
// var num = 2;

// while( i <= 10 ){
//     console.log(num + " x " + i + " = " + (num * i));
//     i++;
// }

// Example - 3: find sum of a digits.
// var i = 1, sum = 0, rem = 0, num = 123;
// var temp = num;
// while(num > 0){
//     rem = num % 10;
//     sum = sum + rem;
//     num = Math.floor(num / 10);
//     i++;
// }

// console.log(`The sum of Digits ${temp} is : ${sum}`);

// 2. do-while loop examples.

// Example - 1: Print a numbers from 1 to 10.
// var i = 1, num = 10;

// do{
//     console.log(i);
//     i++;
// }while(i <= num);

// Example - 2: Print a table for a given numbers.
// var j = 1, value = 2;

// do{
//     console.log(value + " x " + j + " = " + (value*j));
//     j++;
// }while(j<=10);

// 3. for-loop examples

// Example - 1: print numbers from 1 to 10.
var i = 1;

for(i=1; i<=10; i++){
    console.log(i);
}

// Example - 2: find factorial of a number.
var num = 5, fact = 1;

for(let i=num; i>=1; i--){
    fact = fact * i;
}
console.log(`The Factorial of a number ${num} = ${fact}.`);

// Example - 3: Reverse of an array elements.
let arr4 : number[] = [12,2,20,24,7];

for(let row = arr4.length-1; row >= 0; row--){
    console.log("Reverse of an array is : "+row);
}

// 4. for-of loop examples.

// Example - 1: Traverse an array of element.

let arr5 : number[] = [1,2,3,4,5];
console.log("The Array elements are : ");
for(let i of arr5){
    console.log(i);
}

// 5. for-in loop example.
let arr3 : string[] = ["Rajeev","Asad","Disha","Snehal"];

console.log("The String array index = ");
for(let j in arr3){
    console.log(j);
}


