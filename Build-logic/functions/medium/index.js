// medium level example from neog-build
// 1 //// Given an array, your function should return the length of the array.
            // Example:
            // Input: arrayLength([1,5,3,7,8]) ––> Output: 5
const arrayLength = (array) => {
   let lengthOfArray = array.length;
   return lengthOfArray;
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

    const swapItemInArray = (array1,item1,item2) =>{
        //  let array2 = array1.toString();
        let replacedarray = array1.toString().replaceAll(item1,item2); // replacing item1 to item2
        return replacedarray;
    }            
  swapItemInArray([1,5,3,5,6,8], 5, 10);