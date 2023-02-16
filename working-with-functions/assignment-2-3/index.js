/*                      
                            ASSIGNMENT-2
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.
Do the following for the given problem:
*/

// - Write a Function Decleration
function convertString(n) {
    return String(n);
}
// - Write a Function Expression
let convertString = function(n) {
    return String(n);
}
// - Write an Arrow Function without curly brackets (if possible)
let connvertString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertString = (n) => {
    return String(n);
};


// - Execute the function and store the return value in a variable.
let returnValue = convertString(25);

// - Write a Function Declaration
function addNumbers(n){
    return n + 1;
}

// - Write a Function Expression
let addNumbers = function(n){
    return n + 1;
}

// - Write an Arrow Function without curly brackets(if possible)
let addNumbers = (num) => num + 1;

// - Write an Arrow Function with curly brackets
let addnumbers = (num) => {
    return n + 1;
}
// - Execute the function
addNumbers(122);

// - Execute the function and store the return value in a variable.
let returnalue = addNumbers(134);

/* 2. Subtract one
Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)
Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(n){
    return n - 1;
}

// - Write a Function Expression
let substractOne = function(n){
    return n-1;
}

// - Write an Arrow Function without curly brackets(if possible)
let substractionOne = (n) => n-1;

// - Write an Arrow Function with curly brackets
let substractOne = (n) => {return n-1;}


/* 3. Add two numbers
Write a function named `sum` that accepts two numbers and returns the sum of them.
Do the following with above problem.
*/
function sum(a, b){
    return a + b;
}

// - Write a Function Expression
let sum = function(a, b){
    return a + b; 
}

// - Write an Arrow Function without curly brackets(if possible)
let sum = (a, b) => a + b;

// - Write an Arrow Function with curly brackets
let sum = (a, b) => {
    return a + b;
}
// - Execute the function
sum(20, 30)

// - Execute the function and store the return value in a variable
let returnvalue = sum(15, 20);

/* 4. Square of the given value
Write a function named `square` that accepts a number and returns the square of the number.
Do the following with above problem.
*/

// - Write a Function Declaration
function getSquare(number){
    return number * number;
}

// - Write a Function Expression
let getSquare = function(number){
    return number * number;
}

// - Write an Arrow Function without curly brackets(if possible)
let getSquare = (number) => number*number;

// - Write an Arrow Function with curly brackets
let getSquare = (number) => {number*number};

// - Execute the function
getSquare(12);

// - Execute the function and store the return value in a variable
let returnalue = getSquare(12);

/* 5. Find isGreater
Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.
Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x, y){
    return x > y ? true : false;
}
// - Write a Function Expression
let isGreater = function(x, y){
    return x > y ? true : false;
}
// - Write an Arrow Function without curly brackets(if possible)
let isGreater = (x, y) => x > y ? true : false;
// - Write an Arrow Function with curly brackets
let isGreater = (x, y) => {return x > y ? true : false};

// - Execute the function
isGreater(10, 20);

// - Execute the function and store the return value in a variable
let returnvalue = isGreater(10, 20);
/* 6.
Write a function named `oddOrEven` that accepts a`number` and returns
  - `Number is odd` for odd number
  - `Number is even` for even number.
Do the following with above problem.
*/

// - Write a Function Declaration
function oddOreven(number){
    return number % 2 !== 0 ? 'Number is odd' : 'Number is even';
}
// - Write an anonymous Function Expression
let oddOreven = function(number){
    return number%2!==0 ? "Number is odd" : "Number is even";
}
// - Write an named Function Expression
let oddOreven = function(number){
    return number%2!==0 ? 'Number is odd' : 'Number is even'
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (number) => number%2!==0 ? 'Number is odd' : 'Number is even';
// - Write an Arrow Function with curly brackets
let oddOreven = (number) => {
    return number%2!==0 ? 'number is odd' : 'Number is even';
}
// - Execute the function
oddOreven(11);

// - Execute the function and store the return value in a variable
let returnvalue = oddOreven(89);
// - What is the typeof returnValue
//typeof returnvalue is "string"
