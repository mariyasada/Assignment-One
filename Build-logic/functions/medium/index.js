// medium level example from neog-build
// 1 //// Given an array, your function should return the length of the array.
            // Example:
            // Input: arrayLength([1,5,3,7,8]) ––> Output: 5
const arrayLength = (array) => {
   let lengthOfArray = array.length;
  //  return lengthOfArray;
  console.log(lengthOfArray);
}
arrayLength([1,5,3,7,8]); // 5 
arrayLength([1,6,7,8,9,3,5]);

// Given an array and an item, your function should return the index at which the item is present.
            // Example:
            // Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

  const findIndexOfItem = (array ,item) =>{
       let indexofItem = array.indexOf(item);
       return indexofItem;
  }
  findIndexOfItem([1,6,3,5,8,9],3); // 2
  findIndexOfItem([2,4,5,6,7,8,10,1],1); // 7

  //Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
                // Example:
                // Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

    /*const swapItemInArray = (array1,item1,item2) =>{
        //  let array2 = array1.toString();   // it return a string not array
        let replacedarray = array1.toString().replaceAll(item1,item2); // replacing item1 to item2
        return replacedarray;
    }            
  swapItemInArray([1,5,3,5,6,8], 5, 10);*/

  // another way to solve this example
  const replaceItem =(array,num1,num2)=>{
     let replacedArray = array.map(item =>{
       if(item === num1)
       {
         return num2;
       }
      else
      {
        return item;
      }
     })
     return replacedArray;
  }
  replaceItem([1,5,3,5,6,8], 5, 10);

  //Given two arrays, your function should return single merged array.
        // Example:
        // Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

     const mergeArray = (array1,array2) => {
          let mergedArray = array1.concat(array2);
          return mergedArray;
     }   
     mergeArray([1,3,5], [2,4,6]); // [1,3,4,2,5,6]
     mergeArray(["a","b","c","d"],[1,2,3,4,5,6,7,8]); //(12) ['a', 'b', 'c', 'd', 1, 2, 3, 4, 5, 6, 7, 8]

    //Given a string and an index, your function should return the character present at that index in the string.
      // Example:
      // Input: charAt("neoGcamp", 4) ––> Output: c 

      const findCharacterAtIndex = (str,index) =>{
        let charaAtIndex = str.charAt(index);
        return charaAtIndex;
      }
      findCharacterAtIndex("mariyasada" ,5); //a
      findCharacterAtIndex("neoGcamp",3); //G

      //Given two dates, your function should return which one comes before the other.
          // Example:
          // Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

      const minDate = (date1 , date2) => {
          // console.log(typeof(date1,date2));
           let date1Intostr = new Date(date1).getTime(); // get Time returns the number of miliseconds
           let date2Intostr = new Date(date2).getTime();  // Date constructor takes mm/dd/yyyy format
          console.log(date1Intostr,date2Intostr);
          if(date1Intostr < date2Intostr) // 803932200000 1642876200000
          {
            return date1;
          }
          else {
            return date2;
          }
      } 
      // minDate('05/02/2021', '01/24/2021');  // 24/01/2021
      minDate('06/24/1995','01/23/2022'); // 24/06/1995