// Example 1 : Initializing an object using a constructor.
// class Animal {
//     breed : string = '';
//     color : string = '';
//     constructor(breed : string, color : string){
//         this.breed = breed;
//         this.color = color;
//     }
// }
// let animal = new Animal('Husky','black and white');
// console.log("Animal Breed: "+animal.breed+ " , color : "+animal.color);
// Example 2 : Initializing an object by method.
// class Animal {
//     breed !: string;
//     color !: string;
//     displayAnimal(): void{
//         console.log("Animal Breed : "+this.breed);
//         console.log("Color : "+this.color);
//     }
// }
// let animal = new Animal();
// animal.breed = 'Husky';
// animal.color = 'Black and white';
// animal.displayAnimal();
// Example 3 : Initializing an object using a reference variable.
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var animal = new Animal();
animal.breed = "Husky";
animal.color = "Black and White";
console.log("Animal breed: " + animal.breed);
console.log("Animal color: " + animal.color);
