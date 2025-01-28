// Inheritance Examples : Single and Multilevel Inheritance
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
// Example 1 : Single Inheritance
var Car = /** @class */ (function () {
    function Car(name) {
        this.carName = '';
        this.carName = name;
    }
    return Car;
}());
var AudiCar = /** @class */ (function (_super) {
    __extends(AudiCar, _super);
    function AudiCar(name, color, price) {
        var _this = _super.call(this, name) || this;
        _this.carColor = '';
        _this.price = 0;
        _this.carColor = color;
        _this.price = price;
        return _this;
    }
    // Method to display details
    AudiCar.prototype.displayCar = function () {
        console.log("Car Name : " + this.carName);
        console.log("Color : " + this.carColor);
        console.log("Price : " + this.price);
    };
    return AudiCar;
}(Car));
var audi = new AudiCar('New Audi', 'Black', 2000000);
audi.displayCar();
// Example 2 : Multilevel Inheritance
var Animals = /** @class */ (function () {
    function Animals() {
        console.log("Animal Constructor called...");
    }
    Animals.prototype.eat = function () {
        console.log("Eating....");
    };
    return Animals;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super.call(this) || this;
        console.log("Dog constructor called...");
        return _this;
    }
    Dog.prototype.bark = function () {
        console.log("Dog barking...");
    };
    return Dog;
}(Animals));
var babyDog = /** @class */ (function (_super) {
    __extends(babyDog, _super);
    function babyDog() {
        var _this = _super.call(this) || this;
        console.log("BabyDog constructor called...");
        return _this;
    }
    babyDog.prototype.weep = function () {
        console.log("Weeping...");
    };
    return babyDog;
}(Dog));
var obj = new babyDog();
obj.eat();
obj.bark();
obj.weep();
