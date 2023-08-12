const trees = ["redwood", "bay", "cedar", "oak", "maple"];

console.log(0 in trees); 
console.log(3 in trees); 
console.log(6 in trees); 
console.log("bay" in trees); 

console.log("length" in trees);  // returns true (length is an Array property)

// built-in objects
console.log("PI" in Math);

const myString = new String("coral");
console.log("length" in myString); // returns true

// Custom objects
const mycar = { 
    make: "Honda", 
    model: "Accord", 
    year: 1998 
};
console.log("make" in mycar); // returns true
console.log("model" in mycar); // returns true