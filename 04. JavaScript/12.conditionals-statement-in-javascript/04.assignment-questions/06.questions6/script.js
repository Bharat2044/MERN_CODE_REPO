// Write a program to check if 2 numbers have the same last digit. 
// Eg: 32 and 47852 have the same last digit i.e. 2 



let num1 = 200245;
let num2 = 675;

if((num1 % 10) == (num2 % 10))
    console.log(`Both numbers have the same last digit which is ${num1 %10}`);
else
    console.log(`Both number don't have the same last digit`);