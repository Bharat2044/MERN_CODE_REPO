let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits instanceof Array);
console.log(fruits instanceof Object);
console.log(fruits instanceof Number);
console.log(fruits instanceof String);

console.log();

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
console.log(auto instanceof Object);