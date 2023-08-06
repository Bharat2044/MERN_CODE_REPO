// Numbers:
let length = 16;
let weight = 7.5;
console.log(length, typeof(length));
console.log(weight, typeof(weight));
console.log();

// BigInt:
let phoneNumber = 79676768678n;
let distance = 7567685n;
console.log(phoneNumber, typeof(phoneNumber));
console.log(distance, typeof(distance));
console.log();

// Strings:
let color = "Yellow";
let lastName = "Johnson";
console.log(color, typeof(color));
console.log(lastName, typeof(lastName));
console.log();

// Booleans
let isMale = true;
let isFemale = false;
console.log(isMale, typeof(isMale));
console.log(isFemale, typeof(isFemale));
console.log();

// Undefined:
let a;
console.log(a, typeof(a));
console.log();

// Null:
let b = null;
console.log(b, typeof(b));
console.log();

// Symbol:
let x = Symbol();
let y = Symbol("foo");
console.log(x, typeof(x));
console.log(y, typeof(y));
console.log();

// Object:
const person = {firstName:"John", lastName:"Doe"};
console.log(person, typeof(person));
console.log();

// Array object:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars, typeof(cars));
console.log();

// Date object:
const date = new Date("2022-03-25");
console.log(date, typeof(date));
console.log();


let m = 16 + "Volvo";
let n = "Volvo" + 16;
let o = 16 + 4 + "Volvo";
let p = "Volvo" + 16 + 4;
let q = '16' + 4;
console.log(m, typeof(m));
console.log(n, typeof(n));
console.log(o, typeof(o));
console.log(p, typeof(p));
console.log(q, typeof(q));