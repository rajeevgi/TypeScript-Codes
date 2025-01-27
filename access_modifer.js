// TypeScript Access Modifier - Public , Private and Protected.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Student = /** @class */ (function () {
    function Student(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    return Student;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(code, name, department) {
        var _this = _super.call(this, code, name) || this;
        _this.department = department;
        return _this;
    }
    Person.prototype.display = function () {
        return "My code : ".concat(this.studCode, ", My name : ").concat(this.studName, " and I am in ").concat(this.department, " Branch.");
    };
    return Person;
}(Student));
var per = new Person(101, "Rajeev Gupta", "EXTC");
console.log(per.display());
