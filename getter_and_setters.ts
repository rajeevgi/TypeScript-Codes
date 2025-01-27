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

let passcode = "secret passcode";

class Students {
    private _fullName !: string;
    
    // getter created
    getFullName(): string {
        return this._fullName;
    }

    // setter
    set fullName(newName : string) {
        if(passcode && passcode == 'secret passcode'){
            this._fullName = newName;
        }else {
            console.log("Unauthorized Access.")
        }
    }
}

let stud = new Students();
stud.fullName = 'Virat kohli';
if(stud.fullName){
    console.log(stud.getFullName());
}


