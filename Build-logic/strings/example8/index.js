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

//