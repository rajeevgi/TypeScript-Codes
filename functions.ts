// TypeScript Functions.

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
import * as readlineSync from "readline-sync";

function add(a : number, b : number){
    return a + b;
}

function sub(a : number , b : number){
    return a - b;
}

function mul(a : number , b : number){
    return a * b;
}

function div(a : number, b : number){
    if(b === 0){
        console.log("Divisor cannot be zero!");
        return NaN;
    }else{
        return a / b;
    }
}

let continueCal : boolean;

do{

    console.log("\n Calculator \n");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exit");

    const choice = readlineSync.questionInt("Enter your operation(+, -, *, /):");

    const num1 = readlineSync.questionFloat("Enter First number:");
    const num2 = readlineSync.questionFloat("Enter Second number:");

    let result : number;

    switch(choice){
        case 1 : 
                result = add(num1, num2);
                console.log(`Result : ${num1} + ${num2} = ${result}`);
                break;
        case 2 :
                result = sub(num1, num2);
                console.log(`Result : ${num1} - ${num2} = ${result}`);
                break;
        case 3 : 
                result = mul(num1, num2);
                console.log(`Result : ${num1} * ${num2} = ${result}`);
                break;
        case 4 : 
                result = div(num1, num2);
                console.log(`Result : ${num1} / ${num2} = ${result}`);
                break;
        case 5 :
                console.log("Exit");
                break;
        dafault :
                console.log("Invalid operation!"); 

    }

    continueCal = Boolean(readlineSync.keyInYN("Do you want to continue calculation?"));

}while(continueCal);
