// Arrow function or Lambda Expression.
// Example 1 : Arrow function with a parameter.
var sum2 = function (a, b) {
    return a + b;
};
console.log(sum2(20, 30));
// Example 2 : Arrow function without a paramter.
var Print = function () {
    console.log("Hello,rajeev!");
};
Print();
// Example 3 : Arrow function inside a class.
var Student2 = /** @class */ (function () {
    function Student2(code, name) {
        var _this = this;
        this.studCode = 0;
        this.studName = '';
        this.showDetail = function () {
            console.log("Student code : " + _this.studCode + "\t Student Name : " + _this.studName);
        };
        this.studCode = code;
        this.studName = name;
    }
    return Student2;
}());
var stud2 = new Student2(101, "Rajeev Gupta");
stud2.showDetail();
