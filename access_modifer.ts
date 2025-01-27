// TypeScript Access Modifier - Public , Private and Protected.

// Example 1 : By Default it takes public access modifier.

// class Student {
//     public studCode : number = 0;
//     studName : string = '';
// }

// let stud = new Student();

// stud.studCode = 101;
// stud.studName = 'John Cena';

// console.log(stud.studCode+ " " + stud.studName);

// Example 2 : private modifier

// class Student {
//     public studCode !: number;
//     private studName !: string;

//     constructor(code: number, name : string){
//         this.studCode = code;
//         this.studName = name;
//     }

//     public display(){
//         return `My Code : ${this.studCode} , My name : ${this.studName}`;
//     }
// }

// let stud = new Student(101, "Rohit Sharma");
// console.log(stud.display());

// Example 3 : protected modifier

class Student {
    public studCode !: number;
    protected studName !: string;

    constructor(code : number, name : string){
        this.studCode = code;
        this.studName = name;
    }
}

class Person extends Student{
    private department !: string;

    constructor(code : number, name : string, department : string){
        super(code, name);
        this.department = department;
    }

    public display(){
        return `My code : ${this.studCode}, My name : ${this.studName} and I am in ${this.department} Branch.`;
    }
}

let per = new Person(101, "Rajeev Gupta", "EXTC");
console.log(per.display());