// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :
- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
*/

let age = Number(prompt("how old are you ?"));
if (age >= 12 && age <= 55) {
    alert("You can participate in the marathon");
}else if (age >= 4 && age <= 11) {
    alert("You are too young to participate in the marathon");
}else if (age < 4 ) {
    alert("Hey Kiddo! Can You Walk ?");
}else if (age > 55) {
    alert("You are too old to participate in the marthon")
}
console.log(age);

/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.
Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇*/

let repeated = '';
for(let noOff = +prompt(`enter number for repeating 'n'`) ; noOff>=1 ; noOff--){
  let value = "e"
  repeated+=value
}
console.log(`h${repeated}llo`);
/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`
*/
let num = Number(prompt("please enter number you want to get product"));
let sum = 0;
for(let i = 1 ; i <= num ; i++) {
    sum = sum + i;
}
console.log(sum);
/*
 Switch Statement
 🎖Using switch statement do the following
Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.
*/
let number = prompt("please enter any number here from ONE to TEN");
switch(number){
        case "ONE":
        alert(`${number} is eqquals to 1`);
        break;
        case "TWO":
        alert(`${number} is eqquals to 2`);
        break;
        case "THREE":
        alert(`${number} is eqquals to 3`);
        break;
        case "fOUR":
        alert(`${number} is eqquals to 4`);
        break ;   
        case "FIVE":
        alert(`${number} is eqquals to 5`);
        break;
        case "SIX":
        alert(`${number} is eqquals to 6`);
        break;
        case "SIVEN":
        alert(`${number} is eqquals to `);
        break;
        case "EIGHT":
        alert(`${number} is eqquals to 8`);
        break;
        case "NINE":
        alert(`${number} is eqquals to 9`);
        break;
        default :
        alert(`PLEASE TRY AGAIN, if  is none of the above`);
}
/*
Using switch statement do the following
Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

let score = Number(prompt("please enter your marks here"))

switch(true) {
    case score > 100:
        alert("score should not be more than 100");
        break;
        case score > 90:
        alert("your gread is 'AA'");
        break;
        case score > 80 && score <= 90:
        alert("your gread is 'AB'");
        break;
        case score > 70 && score >= 80:
        alert("your gread is 'BB'");
        break;
        case score > 60 && score > 70:
        alert("your gread is 'BC'");
        break;
        case score > 50 && score >= 60:
        alert("your gread is 'CC'");
        break;
        case score > 40 && score >= 50:
        alert("your gread is 'CD'");
        break;
        case score > 30 && score >= 40:
        alert("your gread is 'DD'");
        break;
        default:
        alert("your gread is 'FF'");
}
console.log(score);

 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
let num1 = +prompt("enter first number");
let num2 = +prompt("enter second number");
if (num1 > num2){
    alert(`${num1} is the largest number`);
}else{
    alert(`${num2} is the largest number`)
}
(num1 > num2) ? alert(`${num1} is the largest number`) : alert(`${num2} is the largest number`);
/*
Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
let firstNumber = +prompt("Enter first number");
let secondNumber = +prompt("Enter second number");
let thirdNumber = +prompt("enter third number");
let product = firstNumber * secondNumber * thirdNumber;
if(product > 0) {
    alert("Product is a positive integer");
}else{
    alert("Product is a negative integer");
}

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).
  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/
let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
let sign = prompt ("enter operation sign like + , - , * , / ");
console.log(sign);
if(sign === "+"){
    alert(`sum is ${num1 + num2}`);
}else if (sign === "-") {
    alert(`Substruction is ${num1 - num2}`);
}else if(sign === "*"){
    alert(`Multiplication is ${num1 * num2}`);
}else if(sign === "/") {
    alert(`Division is ${num1 / num2}`);
}else{
    alert("Second number is greater than First number");
}
