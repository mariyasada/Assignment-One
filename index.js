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
   /* var arr = ["MA", "TA", "PA", "CA"];
        var firstName = arr[0],
        var surname = arr[1];
        console.log(firstName);
        console.log(surname);*/
const [firstName, surname] = ["MA", "TA", "PA", "CA"];
console.log(firstName, surname);

// ex6 
        /*var Aaloo = "Tasty";
        var Bhaloo = "Cute";
        var Obj = {
          Aaloo: Aaloo,
          Bhaloo: Bhaloo
        };*/
let Aaloo = "Tasty";
let Bhaloo = "Cute";
const Obj = {Aaloo,Bhaloo};  // object destructuring
console.log(Obj);

// ex7
              /*var a = 5;
              var b = 10;
              console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));*/
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}`);

// ex8 // 
        /*var arithmeticsObj = {
          sum: function sum(num1, num2) {
            return num1 + num2;
          },
          multiply: function multiply(num1, num2) {
            return num1 * num2;
          }
        };*/
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
  /*var avengers = {
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
  var operation = avengers.operation,
   var  members = avengers.members;*/

   //solution
   const {operation,members}={
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
  console.log(operation,members);

    //ex10
    // convert Es6 to Es5
    const packIt = (...args) => console.log(args)

  packIt(1,2,3,5,5);

  //ES5
  function packIt(a,b,c,d,e)
  {
      console.log(a,b,c,d,e);
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
    aaloo : 1,
    bhallo : 2
}

const {c : aloo = [2,3,4].push(5), aaloo} = obj 

console.log(aloo) ;  // 4
console.log(aloo,aaloo) // 4 1