// Write a program that converts the string into uppercase
const stringToUpper = str =>{
    let upperCaseString = str.toUpperCase();
    return upperCaseString;
}
stringToUpper('mariya'); // MARIYA

//Write a program that reads two strings and append first string to the second. 
// So if first string is Good second string is Morning , the program should print MorningGood

const appendString = (str1,str2) =>{
    let finalString = str2.concat(str1);
    return finalString;
}
appendString('Good','morning'); // morningGood

// Program that reads string and count number of characters present in the string
const countCharacters = str => {
   let countChar = str.length;
   return countChar;
}
countCharacters('GoodMorning'); // 11 characters

//Write a program that converts string like "124" to 124
const convertStringToNumber = str =>{
    let strToNum = Number(str);
    return strToNum;
}
convertStringToNumber('1234');

// Write a program to delete all vowels from a string. Assume string is not more than 80 characters long
const deleteVowels = str =>{
    
}
