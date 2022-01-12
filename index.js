 // example 1 coverting var into let 
 /*var aloo = 1;
if (aloo == 1) {
   var a = 2;
   console.log(a);
}
console.log(aloo);*/
// solution

 let aloo = 1;
if (aloo == 1) {
   let a = 2;
   console.log(a);  //2
}
console.log(aloo); // 1

// example 2
const multiply = (x, y) => {
    return x * y;
  };

  //example 3 
  /*var customer = {
  name: "Bhaalo"
};
var card = {
  amount: 20,
  product: "Aaalo",
  unitprice: 50
};
var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"*/

  let customer = {
    name: "Bhaalo"
  };
  let card = {
    amount: 20,
    product: "Aaalo",
    unitprice: 50
  };

  const {name} = customer;
  const {amount,product,unitprice} = card; // object distructuring
  let message = `Hello ${name} wants to buy ${amount}  ${product} for price of ${unitprice} per piece`;

  //exercise 4
  /*var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
        CEO = Neog[0],
      Mentor = Neog[2];*/
  const [CEO, , Mentor] = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];  // array destructuring
   console.log(CEO , Mentor);

   //ex 5
let arr = ["MA", "TA", "PA", "CA"];
let firstName = arr[0];
let surname = arr[1];
console.log(firstName, surname);

// ex6 
let Aaloo = "Tasty";
let Bhaloo = "Cute";
const Obj = {
  Aaloo: Aaloo,
  Bhaloo: Bhaloo
};
// ex7
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}`);

// ex8 // doubt
const arithmeticsObj = 
  {
     sum : (num1, num2) => {
      return num1 + num2;
    },
    multiply: (num1, num2) => {
      return num1 * num2;
    }
  };
  console.log(arithmeticsObj.sum(3,4)); //7
  console.log(arithmeticsObj.multiply(3,4)) //12

  // ex9
  let avengers = {
    operation: "Assemble",
    members: [
      {
        ironMan: "Tony Stark"
      },
      {
        captainAmerica: "Steve Rogers"
      },
      {
        blackWidow: "Natasha Romanoff"
      }
    ]
  };
  let operation = avengers.operation;
   let  members = avengers.members;

    //ex10
    // convert Es6 to Es5
    const packIt = (...args) => console.log(args)

  packIt(1,2,3,5,5);

  //ES5
  function packIt(a,b,s,d,e)
  {
      console.log(a,b,s,d,e);
  }
  packIt(1,2,3,5,5);
// guess the output
const hello = () => "Hello"
const welcome = () => "Welcome"
const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
console.log(Hello, Welcome) // namaste welcome

// another one
const obj = {
    aloo : 1,
    bhallo : 2
}

const {c : aloo = [2,3,4].push(5), aloo} = obj  // first destructuring the c, c:aloo give a alias name to c
                                                // c =aloo=4 then again we are trying to declare aloo that's why it gives error
console.log(aloo) ; // identifier aloo has already been declare


//if it would like this
const obj = {
    aloo : 1,
    bhallo : 2
}

const {c : aaloo = [2,3,4].push(5), aloo} = obj 

console.log(aaloo) ;  // 4
console.log(aaloo,aloo) // 4 1