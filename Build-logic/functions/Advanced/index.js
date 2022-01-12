//Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor

//Given a sentence, return a sentence with first letter of all words as capital.
// // Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

// errors occured.

const toSentenceCase = (str) => {
     let listOfWords = str.split (' ');
     console.log(listOfWords);
    //  return listOfWords
     listOfWords.map(word => {
         let makeFirstCapital = word[0].toUpperCase();
         let completeWord = makeFirstCapital + word.slice(1);
         console.log (completeWord);
        
     })
    .join(' ');
}
toSentenceCase('we are neogrammers');

//Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

const sortArray = array => {
  array.sort(function (a,b){
  return a-b;   // why we use a-b
});
  console.log(array);
}
sortArray([100,83,32,9,45,61]);  // [9,32,45,61,83,100]