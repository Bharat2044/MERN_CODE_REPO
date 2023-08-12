let a = 1, b = 1;
let c = ++a; 
let d = b++;
console.log(a, b, c, d);
console.log();

let e = (1 + 2, 3 + 4);
console.log(e);
console.log();

let counter1 = 1;
console.log(2 * ++counter1); 
let counter2 = 1;
console.log(2 * counter2++);
console.log();

let f = 2;
let g = 1 + (f *= 2);
console.log(f, g);
console.log();

let h = 2;
h *= 3 + 5;
console.log(h);
console.log();

let i = 1;
let j = 2;
let k = 3 - (i = j + 1);
console.log(i, j, k);
console.log();

console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log("  -9  " + 5);
console.log("  -9  " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(" \t \n" - 2);