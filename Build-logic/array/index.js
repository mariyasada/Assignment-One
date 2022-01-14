//Find sum of an array and display the output . Example [10,4,5,2,5,6,9].

const findSumOfNumbers = arr =>{
    let sum=0;
    for(let i=0;i< arr.length;i++)
    {
        sum = sum + arr[i];
    }    
    return sum;
}
findSumOfNumbers([10,4,5,2,5,6,9]); // 41

// example 2
// Find average of an array and display the output.
const findAverageOfArray = arr=>{
    let sum=0;
    for(let i=0;i< arr.length;i++)
    {
        sum = sum + arr[i];
    }    
    return (sum/arr.length);
}
findAverageOfArray([10,4,5,2,5,6,9]);

// example 3
//Find maximum and minimum of an array.
const findMinimum = arr =>{
    let min = arr[0];
    for(let i=0; i<arr.length;i++){
        if(min >= arr[i])
        {
            min=arr[i];
        }
    }
    return min;
}
findMinimum([10,4,5,2,3,6,9]);

// finding maximum
const findMinimum = arr =>{
    let max = arr[0];
    for(let i=0; i<arr.length;i++){
        if(max <= arr[i])
        {
            max=arr[i];
        }
    }
    return max;
}
findMinimum([10,4,50,2,3,6,45]);

// example 4
/*Find Median and Mode of an array.
Median : ((N+1/2)th term.
Mode : Most repeating term*/

const findMedian = arr =>{
    let arrlength = arr.length;
    let medianIndex = (arrlength + 1)/2; // arraylength/2;
    let medianNumber = arr[medianIndex-1]; // arr[4] = 3 // arr[4-1]=arra[3] =2 // this is median of array.
    return medianNumber;
}
findMedian([10,4,5,2,3,6,45]); // length is odd 
// not able to solve ; mode program

// example5
/*Find sum of two arrays.
[3,5,2,9,4] = 3+5+2+9+4 = 23 
[6,2,8,1,3] = 6+2+8+1+3 = 20
Final Output : 20+23 = 43*/

const findSumOfTwoArray = (arr1,arr2) =>{
    let sum1=0;
    for(let i=0;i< arr1.length;i++)
    {
        sum1 = sum1 + arr1[i];
        // console.log(sum1);
    }
    let sum2=0;
    for(let i=0;i< arr2.length;i++)
    {
        sum2 = sum2 + arr2[i];
        // console.log(sum2);
    }  
    console.log(sum1,sum2);  //26 27
     let totalSum = sum1 + sum2;
     console.log(`sum of  two array is: ${totalSum}`);
}
findSumOfTwoArray([3,5,2,9,4,3],[6,2,8,1,3,7]);

// example6
//Find number of constants and vowels in a string.

const findVowelsandConsonant = str =>{
    let vowels=['a','e','i','o','u'];
    //let pattern ='^[a-zA-Z]/gi';
    let countVowels =0;
    let countConsonant=0;
    for(let i=0;i<str.length;i++)
    {
        if(str.includes(vowels[i]))
        {
            countVowels++;
            countConsonant=0;
        }
        else countConsonant++;
        //  if(str.match(pattern)) // not able to remove duplicate characters
        //   countConsonant++;
    }
    console.log(`vowels are ${countVowels} and consonant are ${countConsonant}`)

}
findVowelsandConsonant('veryGoodMorning');

//Shift an array by X to right.
//Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]