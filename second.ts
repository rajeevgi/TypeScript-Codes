// Arrays

// Example 1 : Array creation using square brackets
let fruits : string[] = ['Apple', 'Banana', 'Mango'];
console.log(fruits);

// Example 2 : Array creation using generic array type
let mobiles : Array<string> = ['Samsung','Redmi','Oppo','Vivo','Motorola','Apple'];
console.log(mobiles); 

// Example 3 : Array Objects
let arr : string[] = new Array('Hello', 'JavaTpoint', 'Typescript');

// traversing the array using simple for loop
for(let i = 0 ; i < arr.length; i++) {
    console.log("\t"+arr[i]);
}

// traversing an array using for in loop
for(let i in arr ) {
    console.log(arr[i]);
}

// We can pass arrays to functions by specifying the array name without an index.
let array : string[] = new Array('Hello','Developer');

function displayArray(arr_values : string[]) {
    for( let i = 0 ; i < array.length; i++){
        console.log(arr_values[i]);
    }
}

displayArray(array);

// Spread Operator Examples

let arr1 = [1,2,3];
let arr2 = [4,5,6];

// create new Array from existing array.
let copyArray = [...arr1];
console.log("The Copied Array Values are : "+ copyArray);

// create new array from existing array with new Elements.
let newArray = [...arr1, 7,8];
console.log("The New Array Elements are : "+newArray);

// create array by merging two arrays.
let mergeArray = [...arr1, ...arr2];
console.log("The Merge array elements are:", mergeArray);