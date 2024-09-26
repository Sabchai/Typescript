console.log("engine started");
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("engine started");
    };
    return Car;
}());
var mycar = new Car("Audi ", "A4", 2019);
mycar.start();
