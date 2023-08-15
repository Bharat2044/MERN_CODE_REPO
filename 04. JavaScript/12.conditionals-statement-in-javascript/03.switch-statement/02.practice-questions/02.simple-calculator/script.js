let a = 4;
let b = 2;
let exp = '*';

switch(exp) {
    case '+':
        console.log(`${a} + ${b} = ${a + b}`);
        break;
    case '-':
        console.log(`${a} - ${b} = ${a - b}`);
        break;    
    case '*':
        console.log(`${a} * ${b} = ${a * b}`);
        break;    
    case '/':
        console.log(`${a} / ${b} = ${a / b}`);
        break;
    case '%':
        console.log(`${a} % ${b} = ${a % b}`);
        break;
    case '**':
        console.log(`${a} ** ${b} = ${a ** b}`);
        break;
    default:
        console.log("Please enter +, -, *, /, % or **");
}