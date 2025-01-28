// Inheritance Examples : Single and Multilevel Inheritance

// Example 1 : Single Inheritance

class Car {
    carName : string = '';

    constructor(name : string){
        this.carName = name;
    }
}

class AudiCar extends Car {
    carColor : string = '';
    price : number = 0;

    constructor(name : string, color : string, price : number){
        super(name);
        this.carColor = color;
        this.price = price;
    }

    // Method to display details
    displayCar() : void {
        console.log("Car Name : "+this.carName);
        console.log("Color : "+this.carColor);
        console.log("Price : "+this.price);
    }
}

let audi = new AudiCar('New Audi','Black', 2000000);
audi.displayCar();

// Example 2 : Multilevel Inheritance
class Animals {

    constructor(){
        console.log("Animal Constructor called...");
    }

    eat() : void {
        console.log("Eating....");
    }
}

class Dog extends Animals{

    constructor(){
        super();
        console.log("Dog constructor called...");
    }

    bark() : void {
        console.log("Dog barking...");
    }
}

class babyDog extends Dog{

    constructor(){
        super();
        console.log("BabyDog constructor called...");
    }

    weep() : void {
        console.log("Weeping...");
    }
}

let obj = new babyDog();
obj.eat();
obj.bark();
obj.weep();

