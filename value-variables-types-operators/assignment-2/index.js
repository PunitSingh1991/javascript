/* 1. Do the following
1. Declare a variable `user` and take the name using `prompt`. Display the value stored in `user` using `alert`.
2. Now copy the value of `user` into a new variable named `userName`. Log the value of both `user` and `userName` using `console.log`.
3. Declare variable `age` and `isLearning` with value `22` and `true` in the same line. hint: declaring multiplemvariable in one line.
4. Now change the value of `user` to `John` and log the value of both `user` and `userName`.
*/
var user = prompt("please enter your full name");
alert(`MY name is ${user}`);
let userName;
userName = user;
console.log(userName);
let age = 22 , isLearning = true;
user = "john";
console.log(user);
console.log(userName);

/* 2.
Use `prompt` to take two numbers from user and store it in variable `numA` and `numB`. Create a third variable called `sum`, using `+` operator add numA and numB , store it in varible `sum` and using alert display `sum` in browser.
*/
let numA = Number(prompt("Please enter a first number"));
let numB = Number(prompt("Please enter second number"));
let sum;
sum = numA + numB;
console.log(sum);