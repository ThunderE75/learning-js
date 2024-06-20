// Constructor      A special function used to make instance of an objects
//                  Conventionally, the identifier name starts with upper case
//                  used to define the properties of that object

// Example object
// const car = {
//     make: "Ford",
//     model: "Mustang",
//     year: 2024,
//     inProduction: true
// }

function Car(make, model, year, inProduction) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.inProduction = inProduction;
    this.drive=function() {return `You are driving a ${this.year} ${this.make} ${this.model}`}
}

// Making an instance of a car
const car1 = new Car("Ford","Mustang",2024,true);

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.inProduction);
console.log(car1.drive());