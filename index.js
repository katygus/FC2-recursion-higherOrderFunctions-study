// Practice Test: Higher Order Functions, Callbacks & Recursion


// Problem 1
// Write a function `capitalizeWords` that takes an array of strings and 
// returns a new array with each word capitalized. Use `map()`.
function capitalizeWords(arr) {
   return arr.map(el => el + 's');
}

const pluralArr = ['dog', 'elbow', 'top', 'cheese'];
// console.log(capitalizeWords(pluralArr));

// Problem 2
// Create a function `countVowels` that uses recursion to count how 
// many vowels are in a string.
//base - length of string is 0
//recursive - convert all els to lower case, check if vowel, incr vowel counter if so, slice el from string
   
function countVowels(string, acc = 0) {
    if (string.length === 0) return acc;
    if (string.toLowerCase()[0] === 'a' || string.toLowerCase()[0] === 'e' || string.toLowerCase()[0] === 'i' || string.toLowerCase()[0] === 'o' || string.toLowerCase()[0] === 'u') {
        acc++;
    }
    return countVowels(string.slice(1), acc);
  
    // if (vowelStr.includes(string[0])) acc++;
    // return countVowels(string.slice(1));
    
    
    //return string.toLowerCase.includes(vowelsArr[0])  countVowels(string.slice(1));
    
}

// console.log(countVowels('abracadabra'));
// Problem 3 - ***** EXTRA CHALLENGING-SAVE TO END
// Implement a function `delayedGreeting` that takes a name and a callback 
// function, then executes the callback after a 1-second delay with the greeting 
// "Hello, [name]!".




// Problem 4
// Write a function `filterByLength` that takes an array of strings and a number, 
// then returns a new array with only strings longer than the given number. 
// Use `filter()`.
function filterByLength(arr, num) {
    return arr.filter((ele) => ele.length > num);
    
}

// console.log(filterByLength(['banana', 'help', 'cat', 'purple', 'excalibur'], 4));


// Problem 5
// Create a recursive function `reverseString` that reverses any string passed to it.
/* Approach:
1. assign length of orig str to decrementor var
2. init return string var to hold backwards word
3. base
4. recurse - concat first letter to new str, remove first letter from old str
*/
function reverseString(str) { // AAAAAAAAGGGGGGGGHHHHHHHHHHHHHH!!!!!!!!!!!
   let newStr = str[0];
    if(str === 0) return str;//base: str is 0
     newStr = str[0]+newStr;
    // take letter at [1] and place at [0]
    // console.log(newStr);
    // console.log(str.slice(0,idx) + str.slice(idx + 1));
    return reverseString(newStr.slice(1));   
}
// console.log(reverseString('live'));

// Problem 6
// Implement a function `processNumbers` that takes an array of numbers and two callbacks.
//  It should apply the first callback to even numbers and the second to odd numbers, returning 
// a new array.

function processNumbers(arr, cb1, cb2) {
    const returnArr = [];
    for (let el of arr) {
        if (el % 2 === 0) {
            returnArr.push(evenNumDouble(el));
        }  
        if (el % 2 !== 0)
            returnArr.push(oddNumAdd1(el));
    } return returnArr;

    //return new arr
}

const oddNumAdd1 = (num) => num + 1;
const evenNumDouble = (num) => num * 2;
// console.log(processNumbers([1,2,3,4,5,6,7], oddNumAdd1, evenNumDouble)); // [2, 4, 4, 8, 6, 12, 8]

// Problem 7
// Write a function `sumSquares` that uses `reduce()` to calculate the sum of squares of all
//  numbers in an array.
function sumSquares(arr) {
    return arr.reduce((acc, curr)  => acc + (curr * curr), 0); 
}

const numArr = [2, 4, 6, 8]; // 4, 16, 36, 42
//console.log(sumSquares(numArr));
// Problem 8
// Create a function `countdown` that uses recursion to log numbers from a given number down to 0.
function countdown(num) {
    if (num == 0) return num;
    console.log(num);
    return countdown(num-1);
}
// console.log(countdown(10));

// Problem 9
// Implement a higher-order function `applyTwice` that takes a function and a value, and applies the 
// function to the value twice.
function applyTwice(cb, num) {
    return cb(num) + cb(num);
    
}

const addTwo = (num) => num + 2;
// console.log(applyTwice(addTwo, 5));
// Problem 10
// Write a function `findFirstPositive` that uses `find()` to locate the first positive number in an array.
function findFirstPositive(arr) {
    return arr.find((ele) => ele % 2 === 0);
}

// console.log(findFirstPositive([5,7,9,2,3,4]));
// Problem 11
// Create a recursive function `flattenArray` that takes a nested array and returns a flattened version 
// (one level deep).




// Problem 12
// Implement a function `asyncMultiply` that takes two numbers and a callback, then uses `setTimeout` to
//  call the callback with the product after 500ms.




// Problem 13
// Write a function `allTruthy` that uses `every()` to check if all elements in an array are truthy.




// Problem 14
// Create a function `alternateCaps` that takes a string and a callback, then applies the callback to alternate 
// characters (odd-indexed characters uppercase, even-indexed lowercase).



// Problem 15  
// Write a recursive function `sumDigits` that takes a positive integer and returns the sum of its digits.



// Problem 16  
// Create a recursive function `countOccurrences` that takes an array and a target value, returning how many times the target appears in the array.



// Problem 17 
// Implement a recursive function `range` that takes two numbers (a, b) and returns an array of all integers between them, inclusive.



// Problem 18  
// Write a recursive function `deepCount` that returns the number of elements in a nested array (counting all elements at all levels).



// Problem 19  
// Create a recursive function `binarySearch` that implements the binary search algorithm on a sorted array, returning the index of the target element or -1 if not found.




// Problem 20 (Advanced, please dont stress this is just for us to get comfortable with not knowing something)
// Implement a memoized recursive Fibonacci function that uses tail call optimization principles. The function 
// should efficiently calculate Fibonacci numbers without redundant calculations or stack overflow.

