// TypeScript Union : It is used to assign two or more data types to a single variable.

// Example 1 : Creating simple variable with union pipe.
let value : number | string;
value = 120;

console.log("The Numeric value of Value is : ", value);

value = "Welcome to India";
console.log("The String Value of Value is : ", value);

// Example 2 : Passing Union type to a function.
function displayValue(value : number | string){
    if(typeof(value) === "number"){
        console.log("The given value is numeric value.", value);
    }else if(typeof(value) === "string"){
        console.log("The given value is string value.", value);
    }
}

displayValue(123);
displayValue("Rajeev");

// Example 3 : Passing Union type to Arrays.
let arrType : number[] | string[]
arrType = [1,2,3,4,5];
console.log("The Numeric type array:");

for(let i = 0 ; i < arrType.length; i++){
    console.log("\t"+arrType[i]);
}

arrType = ['Mumbai', 'Chennai', 'Kolkata', 'Delhi'];
console.log("The string type array : ");
for(let i = 0 ; i < arrType.length; i++){
    console.log("\t"+arrType[i]);
}