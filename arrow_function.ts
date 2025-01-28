// Arrow function or Lambda Expression.

// Example 1 : Arrow function with a parameter.
let sum2 = (a : number, b : number) => {
    return a + b;
}

console.log(sum2(20,30));

// Example 2 : Arrow function without a paramter.
let Print = () => {
    console.log("Hello,rajeev!");
}

Print();

// Example 3 : Arrow function inside a class.
class Student2 {
    studCode : number = 0;
    studName : string = '';

    constructor(code : number, name : string){
        this.studCode = code;
        this.studName = name;
    }

    showDetail = () => {
        console.log("Student code : "+ this.studCode + "\t Student Name : "+ this.studName);
    }
}

let stud2 = new Student2(101, "Rajeev Gupta");
stud2.showDetail();