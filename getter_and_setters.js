// TypeScript Getters and Setters.
// Getters : Get keyword is used in getters.
// class MyDrawing {
//     length : number = 20;
//     breadth : number = 15;
//     get rectangle() {
//         return this.length * this.breadth;
//     }
// }
// console.log(new MyDrawing().rectangle);
// Setters : set Keyword is used in setters. 
// Example 
var passcode = "secret passcode";
var Students = /** @class */ (function () {
    function Students() {
    }
    // getter created
    Students.prototype.getFullName = function () {
        return this._fullName;
    };
    Object.defineProperty(Students.prototype, "name", {
        // setter
        set: function (newName) {
            if (passcode && passcode == 'secret passcode') {
                this._fullName = newName;
            }
            else {
                console.log("Unauthorized Access.");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Students;
}());
var stud = new Students();
stud.name = 'Virat kohli';
if (stud.name) {
    console.log(stud.getFullName());
}
