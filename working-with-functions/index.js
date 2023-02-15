/*
1. Create a function named `sayHello` that alerts a message `Hello World!`.
*/
function sayHello() {
    return `Hello World`
}
let msg = sayHello("Hello World");
alert(msg);
/*
2. Create a function named `fullName` with the following steps:
  - Prompts a message saying `Enter your first name` and store the value into variable named `firstName`
  - Prompts a message saying `Enter your last name` and store the value into variable named `lastName`
  - Concat the value of fistName and lastName and store it in another variable named `fullName`.
  - Alert `fullName`
*/
function fullName() {
    let firstName = prompt("Enter your first name");
    let lastName = prompt("Enter your last name");
    let fullName =  (`${firstName} ${lastName}`);
    alert(`I am ${fullName}`);
}
fullName();
/*
3. Create a function named `addTwoNumbers` with the following steps:
  - Prompts a message saying `Enter the first number` and store the value into variable named `firstNum`
  - Prompts a message saying `Enter the second` and store the value into variable named `secondNum`
  - Add the value of firstNum and secondNum and store it in another variable named `sum`.
  - Alert `sum`
*/
function addTwoNumbers() {
    let firstNum = +prompt("Enter the first number");
    let secondNum = +prompt("Enter the second number");
    let sum = firstNum + secondNum;
    alert(`The sum of both numbers is ${sum}`);
}
addTwoNumbers();
/*
4. Create a function named `getTable` with the following steps:
  - Prompts a message saying `Enter a number` and store the value into variable named `num`
  - Using `console.log` logs the Multiplication Table of the number entered by the user.
  - Example: Number is 9
  9 * 1 = 9
  9 * 2 = 18
  9 * 3 = 27
  9 * 4 = 36
  9 * 5 = 45
  9 * 6 = 54
  9 * 7 = 63
  9 * 8 = 72
  9 * 9 = 81
  9 * 10 = 90
*/
function getTable(){
    let num = +prompt("Enter a number");
    for(let i = 1; i <= 10; i++){
        console.log(`${num} * ${i} = ${num * i}`);
    }
}
getTable();
/*
5. Create a function named `isLeapYear` with the following steps:
  - Prompts a message saying `Enter a year` and store the value into variable named`year`
  - Alert `[year] is a leap year` otherwise `[year] is not a leap year`
*/
function isLeapYear() {
  let year = +prompt('enter a year');
  year % 4 === 0 ? alert(`${year} is a leap year`) : alert(`${year} is not a leap year`);
}
isLeapYear()
/*
6. Create a function named `getFactorial` with the following steps:
  - Prompts a message saying `Enter a number` and store the value into variable named`number`
  - Alert `The factorial of [number] is [factorial]`
*/
function getFactorial(){
  let number = +prompt('Enter a number');
  let fact = 1;
  for(let i = number; i >= 1; i--){
    fact = fact * i;
  }
  alert(`The factorial of ${number} is ${fact}`)
}
getFactorial();

//assignment : Arguments and Return
/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
function sayHello(name) {
  alert(`Hello ${name}`)
}
sayHello("punit")
/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.
*/
function getfullName(firstName, lastName) {
  return `${firstName}  ${lastName}`
}
getfullName("punit", "singh");
/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`
Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/
function addTwoNumbers(firstNum, secondNum){
  if(firstNum === Number(firstNum) && secondNum === Number(secondNum)){
    return `some of both numbers is ${firstNum + secondNum}`;
  }else{
    alert("enter a valid input");
  }
}
addTwoNumbers(10, 22);
addTwoNumbers(20, 32);
/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`
Example:
calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/
function calc(numA, numB, operation){
  if(
    typeof numA !== "number" || 
    typeof numB !=="number"
    ){
    alert(`enter a valid number`);
  }else{
    switch(operation){
      case "add":
        return numA + numB;
      case "sub":
        return numA - numB;
      case "mul":
        return numA * numB;
      case "div":
        return numA / numB;
      default :
       alert("enter a valid operation");
    }
  }
}
calc(10, 20, 'add');
calc(20, 10, 'sub');
calc(20, 10, 'mul');
/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.
isLeapYear(2000); // true
isLeapYear(2001); // false
*/
function isLeapYear(year){
  if(year % 4 === 0)
    return true;
  if(year % 4 !== 0 )
    return false;
}
isLeapYear()
/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/
function getFactorial(num){
  let final = 1;
  for(let i = num; i >= 1; i--){
    final = final*i;
  } 
  return final;
}
getFactorial()
