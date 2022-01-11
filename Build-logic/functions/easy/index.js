//Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

const powerNumber = (a,b) => a ** b; // ** represent the exponentation 2*2*2;
powerNumber(2,3);

//Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80
// formula for hexagon's area = ((3 * sqrt(3)) /2) *(a*a)

const areaOfHexagon = (length) => {

    let area = ((3 * Math.sqrt(3)) /2) *(length *length);
    //return area;
    console.log(`area of Hexagone is ${area}`);
}
areaOfHexagon(10);

// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

const noOfWords = (sentence) => {
     let numberOfwords = sentence.split(' ');
     console.log(numberOfwords); // output; (3) ['we', 'are', 'neogrammers']

}
noOfWords('We are neoGrammers');

//   Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)

const findMinimum = (a,b,...args) =>{

     let minimumNumber = Math.min(a,b,...args);
     return minimumNumber;
    //  console.log(`minimum number is ${minimumNumber}`);
}
findMinimum(3,5,9,1); // 1
findMinimum(3,5) //3

//Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)

const findMaximum =(a,b,...args) =>{
    let maximumNumber = Math.max(a,b,...args);
    return maximumNumber;
}
findMaximum(3,5,8);  // 8
findMaximum (23,45,78,6); // 78


// Given three angles of a triangle, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle
// scalene = no sides or angle equal
// equilateral = 3 angles are equal
// isosceles = two angles or two sides are equal

const typeOfTriangle = (angle1, angle2, angle3) => {

    let sumofAngles = angle1 + angle2 + angle3;
    if(sumofAngles === 180)
    {
        // console.log(`it is triangle`);
        if(angle1 === angle2 &&  angle2 === angle3)
        {
            console.log(`it is equilateral triangle`);
        }
        else if(angle1 === angle2 || angle2===angle3 || angle3 === angle1)
        {
            console.log(`it is isosceles triangle`);
        }
        else{
            console.log(`it is scelene triangle`);
        }
    }
    else{
        console.log(`not a triangle`);
    }
}
typeOfTriangle(45,45,90); // isosceles