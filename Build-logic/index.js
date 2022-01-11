//Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

const addtionOfNumbers =(num1,num2,num3,num4,num5)=>
{
   return num1 + num2+ num3 + num4 + num5;
}
addtionOfNumbers(5,13,7,21,48);

//Write a program to take a number input from user and determine whether the number is odd or even.

let number = 13;
 
if(number % 2===0)
{
    console.log(`${number} is even`);
}
else
{
    console.log(`${number} is odd`);
}

// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
const findMaximumMinimun = (num1,num2) => {
    if(num1> num2)
    {
        console.log(`${num1} is maximum than ${num2} and minimum is ${num2}`);
    }
    else
    {
        console.log(`${num2} is maximum than ${num1} and minimum is ${num1}`);
    }
}
findMaximumMinimun(129,251);

//Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
const findMaximum = (num1,num2,num3) =>{
    if(num1 > num2 )
    {
        if(num1 > num3)
        {
            console.log(`${num1} is maximum`);
        }
        else{
            console.log(`${num3} is maximum`);
        }        
    }
    else{
        console.log(`${num2} is maximum`);
    } 
}
findMaximum(8,2,17);
//Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
const findMinimum = (num1,num2,num3) =>{
    if(num1 < num2 )
    {
        if(num1 < num3)
        {
            console.log(`${num1} is minimum`);
        }
        else{
            console.log(`${num3} is minimum`);
        }        
    }
    else{
        console.log(`${num2} is minimum`);
    } 
}
findMinimum(3,29,46);

// Write program to take a month as an input from the user and find out whether the month has 31 days or not.
// let month = feb;
const findDaysInMonth = (month2) => {
    let month = month2;
    console.log(month2);
switch (month) {
    case 'january':
         console.log(`31 days in ${month}`)
        break;
    case 'febuary':
         console.log(`28 days in ${month}`)
        break;
    case 'march':
         console.log(`31 days in ${month}`)
        break;
    case 'april':
         console.log(`30 days in ${month}`)
        break;
    case 'may':
         console.log(`31 days in ${month}`)
        break;
     case 'june':
         console.log(`30 days in ${month}`)
        break;
    case 'july':
         console.log(`31 days in ${month}`)
        break;
     case 'august':
         console.log(`31 days in ${month}`)
        break;
        case 'september':
            console.log(`30 days in ${month}`)
           break;
           case 'october':
         console.log(`31 days in ${month}`)
        break;
        case 'november':
         console.log(`30 days in ${month}`)
        break;
        case 'december':
         console.log(`31 days in ${month}`)
        break;
    default:
        console.log(`enter valid month`)
        break;
}

}
findDaysInMonth('march');

// Intremediate question
//Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

//Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....
 for(let i=0 ; i <=100 ; i++)
 { 
    let output = "";
     if(i% 3 ===0)
     {
         output +="fizz";
     }
     if(i% 5 === 0)
     {
         output+='Buzz';
     }
     console.log(output || i);
 } 

 // start pattern // don't use c language logic
 for(let i='*'; i.length<6; i+= "*")
 console.log(i);

 //Write a program to take a number input from user and print multiplication table 12 times for that number.
 let number = 5;
 for(let i=1; i<=12;i++)
 {
    console.log(number * i);
 }
 // Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....
 const fiboNacciSeries = (num)=>{
     let num1 = 0; let num2 = 1; let num3;
     for(let i=0; i <num;i++)
     {
        console.log(num1);
         num3 = num1  +num2;
         num1 = num2;
         num2 = num3;
     }
 }
 fiboNacciSeries(9);
 // Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

 const findFatorial = (num)=>{
     let factorial =1;
     for(let i=1; i<=num ; i++)  // (let i=num;i>=1;i--)
     {
         factorial= factorial * i; //  1*2*3*4*5 = 5*4*3*2*1
         
     }
     console.log(`factorial of ${num} is ${factorial}`);
 }
 findFatorial(5);

 // Write a Program to take a number input from user and find if the number is Prime or not.
//  a number that can be divided exactly only by itself and 
 const findPrime = (num)=>{
     
    for(let i=2; i<=num ;i++)
    {
        if(num % i === 0 && num === i)
        {
            console.log(`${num} is prime number`);
        }
        if(num % i === 0 && num !== i)
        {
            console.log(`${num} is not prime number`);
            break;
        }
        
    }
 }
 findPrime(5);
 //
 //Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.