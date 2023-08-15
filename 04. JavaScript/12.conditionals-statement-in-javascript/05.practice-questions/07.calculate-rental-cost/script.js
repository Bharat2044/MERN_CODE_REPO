// A car rental company needs to calculate the cost of a rental based on the number of days rented and the type
// The total cost would be the rental cost multiplied by the number of days rented.
// The rental costs are
//      Economy = Rs. 4000 /- per day
//      Midsizq = Rs. 10,000 /- per day
//      Luxury = Rs. 20,000 /- per day.



let noOfDays = 4;
let carType = "Luxury";

if(carType == "Economy")
    console.log(4000 * noOfDays);
else if(carType == "Midsizq")
    console.log(10000 * noOfDays);
else if(carType == "Luxury")
    console.log(20000 * noOfDays);
