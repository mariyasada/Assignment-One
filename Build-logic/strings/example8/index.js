// A program that counts number of vowels and consonants in a String?
const countVowelsAndConsonants = str => {
 let countVowels= 0;
 let countConsonant =0;
 let vowels = ['a','e','i','o','u'];
 for(let i=0; i< str.length;i++){
 if(str.includes(vowels[i]))
 {
     countVowels++;
    //  console.log(`vowels are ${countVowels}`);
 }
 else{
     countConsonant++;
    //  console.log(`consonants are ${countConsonant}`);
 }
 }
 console.log(`consonants are ${countConsonant} and vowels are ${countVowels}`);
}

countVowelsAndConsonants('mariyasada');

// Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()
const findLength = str =>{
    let counter=0;
    while(str[counter]!== undefined)
    {
        counter++;
    }
    return counter;
    
}
console.log((findLength('mariya')>7)? true:false);

//Write a program that takes two strings and copies smaller string into bigger string
const copySmallerToBiggerString = (str1,str2) =>{
     if(str1.length > str2.length)
     {
         console.log(`${str1}${str2}`);
     }
     else{
        console.log(`${str2}${str1}`);
     }
}
copySmallerToBiggerString('sada','mariya');

//Given a string, determine if it is a palindrome, considering only alphanumeric characters

const checkPalindromeForAlphanumeric = str => {
    //let regEx = /[0-9]/gi;
    let splitString = str.split('');
    console.log(splitString);
    let reverseString = splitString.reverse().join('');
    console.log(reverseString);
    if(reverseString === str)
{
    console.log(`string ${str} is palindrome`);
}
else{
    console.log(`string ${str} is not palindrome`);
}
}
checkPalindromeForAlphanumeric('na5aan');

// example 12 not able to solve
// ex 13 not able to solve // tried by using setTime  method but got stuck

// ex 14
// Write a program that masks all but last four characters of the string "5565534276455423" to '#'

const maskFourCharacter = str =>{
    let cutFirstToLastString = str.slice(0,-4); // 556553427645 except last four digits
    // console.log(cutFirstToLastString);
    let cutLastFourDigits = str.slice(-4); //5423
    // console.log(cutLastFourDigits);
    let makeMaskToString = '#'.repeat(cutFirstToLastString.length);
    // console.log(makeMaskToString);
    let maskCompleteString = makeMaskToString.concat(cutLastFourDigits);
    console.log(maskCompleteString);
}
maskFourCharacter('5565534276455423456');

//Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case
const makeFirstLetterCapital = str =>{
     let splitString = str.split(' ');
     for (let i=0; i< splitString.length;i++)
     {
         let MakeCapital = splitString[i].slice(0,1).toUpperCase() + splitString[i].slice(1);
         console.log(MakeCapital);
        //  let makeSmall = splitString[i].slice(1);
        //  //console.log(makeSmall);
        //  let makeFirstLetterCapitalString = (MakeCapital.concat(makeSmall));
        //  console.log(makeFirstLetterCapitalString );
     }
    //  return MakeCapital;
    

}
makeFirstLetterCapital("tic tac toe is a fun game");

// advance Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string

const replaceCharacter = (str,c1,c2)=>{
    let replaceString = str.replaceAll(c1,c2);
    return replaceString;
}
replaceCharacter('mariyasadaaaa','a','g'); //mgriygsgdgggg'

// Write a program to toggle case of each character of the string "good afternoon" (example: "neogcamp" ⇒ "nEoGcAmP" )
// not able to solve
const toggleCharacter = str =>{
    for(let i=0; i< str.length;i++)
    {
        if (str[i]%2 !==0)
        {
            let toogleChar = str[i].toUpperCase();
            // return toogleChar;
        }
        // let completeString = str[i] + toogleChar;
        // console.log(completeString);
        return toogleChar;
    }
    let completeString = str[i] + toogleChar;
        console.log(completeString);
}
toggleCharacter("neogcamp");