let x = 10;
let y = 8;
let z = 5;

if(x > y && x > z)  
    console.log(`${x} is greater than ${y} and ${z}`);
else if(y < z) 
    console.log(`${y} is greater than ${x} and ${z}`);
else
    console.log(`${z} is greater than ${x} and ${y}`);