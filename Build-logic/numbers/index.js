// Write a program to input 2 numbers and display the sum of the numbers to the console.

// Input Number 1: 20
// Input Number 2: 40
// Sum : 60

const addTwoNumber = (a,b) => a + b;
console.log(addTwoNumber(20,40));

// Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

// Input: P=100, R=6%, T=2
// Output: 12

const simpleInterest = (amount, time, rate) =>{

    let calculateInterest = (amount * time * rate)/100;
    return calculateInterest;
}
simpleInterest(100,6,2); // 12

//Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

// Formula : 0.5 * m * v * v

const kineticEnergyOfBody = (mass, volume) =>{
     let calculateEnergy = 0.5 * mass * volume *volume;
     return calculateEnergy;
}
kineticEnergyOfBody(20,40); // 16000

//Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: C = (F - 32) * 5/9 'F' and 'C' are the temperatures on the Fahrenheit scale and Celsius scale respectively.

// Input: 56
// Output: 13.33333

const ferenhitToCelcius = ferenhit =>{
    let calculateCelcius = (ferenhit - 32) * (5/9);
    return calculateCelcius;
}
ferenhitToCelcius(60); //15.555555555555557

// Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

// Formula : Area: a*a , Perimeter: 4*a , Surface Area: 6*a*a ,Volume: a*a*a

const  findPropertyOfsquare = length => {
    let area = length * length;
    let perimeter = 4 * length ;
    let surfaceArea = 6 * length *length;
    let volume = length * length * length;
    console.log(` square's area is ${area} and perimeter is ${perimeter},surfaceArea is ${surfaceArea} and volume is ${volume}`);
}
findPropertyOfsquare(7);

//Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

const calculateProfitLoss = (CP,SP) =>{
    if(SP > CP)
    {
         let profit = Number(SP - CP);
         console.log(`profit is ${profit}`);
    }
    else if(CP > SP)
    {
        let loss = Number(CP -SP);
        console.log(`loss is ${loss}`);
    }
    else{
        console.log(`no gain no pain`);
    }
}
calculateProfitLoss(1500,2000);
calculateProfitLoss(3125,1125)

// Write a program to calculate sum of N natural digits, as input by the users?
// Enter a positive integer: 100 Sum = 5050 // formula : (n * (n+1))/2;

const sumOfNaturalNumber = num => {
    let sumOfNumber = (num * (num+1))/2;
     return sumOfNumber;
}
sumOfNaturalNumber(100);

//Write a Program to Print N Odd Number in Descending Order. Input : 4
// 5
// 3
// 1

const oddNumberInDescendingOrder = num => {
    for(let i = num-1; i>=0 ;i--) // i=3; 3.=0 ;3--
    { 
        let oddNumber = 1 + (i * 2);  // 1+ 3*2
        console.log (oddNumber);  // 7
    }
}
oddNumberInDescendingOrder(4);

// Write a JavaScript program to compute the sum of all digits that occur in a given string.
// Input: 1234  Output: 1+2+3+4 = 10

const sumOfDigits = (str) => {
//   console.log(num);
let sum = 0;
 for(let i=0; i<str.length; i++)
 {
     console.log('hiii');
      sum = sum + Number(str.charAt(i));
    //  console.log(sum);
    //  return sum;
 }  
  return sum;
}
sumOfDigits('1234'); // 10

// Write a JavaScript program that reverses a number.

const reversedNumber = (num) => {
   return Number(num.toString().split('').reverse().join(''));

}
reversedNumber(12345); // 54321

//Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.
// Enter a Number : 1234 // cut the first two numbers and add them to last
// Enter the Number of Rotations : 2
// Output : 3412

const rotateNumber = (num,rotatecount) =>{
     let splitNumber = num.toString().split('');
    //  console.log(splitNumber);
     let lastDigits = splitNumber.slice(rotatecount).join('');
     let firstDigits = splitNumber.slice(0,rotatecount).join('');
      let rotatedNum = Number(lastDigits + firstDigits);
     return rotatedNum ;
}
rotateNumber(1234,2);  //3412

//Write a Program to convert Decimal to Binary.
const decToBin = num => {
    let binaryNumber = Number(num.toString(2));
    return binaryNumber;
}
decToBin(10);

// Write a Program to Convert Octal to Decimal.
const octalToDec = num =>{
    let decimalNumber = parseInt(num,8); // parseInt parses a string and returns integer for base 
                                            // in ParseInt redix range between 2 to 36 => not including 2 and 36
                                            // If you entered 2 and 36 it gives output as NaN.
    return decimalNumber;
}
octalToDec(116); //78
