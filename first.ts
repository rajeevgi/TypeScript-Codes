function greeter(person : any){
    return "Hello," + person;
}

var user = "Rajeev";
console.log(greeter(user));


function addTwoNum(a1: number,b1 : number){
    return a1+b1;
}

var sum = addTwoNum(5,2);
console.log("The sum of two numbers is :" + sum);

// Typescript type annotations example
function display(id : number, name : string) {
    console.log("Id:" + id + ", " + "Name :" +name);
}

display(101, 'Rajeev');