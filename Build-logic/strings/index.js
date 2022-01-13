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
const deleteVowels = str => {
    let stringAfterVowels = str.replace(/[aeiou]/gi,' ');
    return stringAfterVowels;
}
deleteVowels("mariyasaada");

//Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45
const checkAlphanumeric = str =>{
    let regEx =/[0-9]/gi;
    if(str.match(regEx))
    {
        console.log(`${str} is alphanumeric`);
        return str.match(regEx);
    }
    else{
        console.log(`${str} is  not alphanumeric`);
    }
    
}
checkAlphanumeric('batman@45');
checkAlphanumeric('mariyasada');

//A program that reads three strings and prints the longest and smallest one

const checkTheLongestAndSmallestString = (str1,str2,str3)=>{

    checkLongest(str1,str2,str3);
    checkSmallest(str1,str2,str3);
   
   }
   const checkLongest = (str1,str2,str3)=>{
   if(str1.length <= str2.length) {
   
       if(str2.length  <= str3.length)
       {
           console.log(`longest string is ${str3}`);}
           
       else{
            console.log(`longest string is ${str2} `);
           }
   }
   else{
       console.log(`longest string is ${str1} `);
   }
   }
   const checkSmallest = (str1,str2,str3)=>{
       if(str1.length >= str2.length) {
         console.log(str1.length,str2.length);
       
           if(str2.length  >= str3.length)
           { console.log(str3.length);
               console.log(`smallest string is ${str3}`);}
               
           else{
                console.log(`smallest string is ${str2} `);
               }
       }
       else{
           console.log(`smallest string is ${str1} `);
       }
       }
   checkTheLongestAndSmallestString("saniyapatel",'mariya',"sadmara");

   //
