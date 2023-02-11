

/*
1. Write a program that asks the user for a number and check the following conditions:
  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number = Number(prompt("please enter the number"));
if(number % 2 == 0){
    document.write("Number is even");
}else{
    document.write("Number is odd" )
}


// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = Number(prompt("Enter the first number"));
let num2 = Number(prompt("enter the secon number"));

if(num1 > num2){
    alert(`Max number is ${num1}`);
    document.write(num1)
}else{
    alert(`Max number is ${num2}`);
    document.write(num2)
}

// 3. Convert the above code using`?` terniary operator.

num1 > num2 ? alert(`max number is ${num1}`) : alert(`max number is ${num2}`);
/*
//4. Write a program that asks the user for the house name and check the following conditions:
  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die".
*/
  let housename = prompt("please enter house name");
  if(housename == "stark"){
    document.write("winter is coming");
  }else if(housename == "punit"){
    document.write("Punit always pays his debt.");
  }else{
    document.write("all men sholuld die.")
  }

// 5. Convert the above code using`?` terniary operator.

let housename = prompt("please enter house name");

housename == "stark" ? document.write("winter is coming") : housename == "Punit" ? document.write("Punit always pays his debt.") : document.write("All men must die");
 

//6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let days = Number(prompt("Please enter a valid month number"));

switch(days){

    case 1:
      alert("month is january,it has 31 days")
      break;
    case 2:
      alert("month is fabruary,it has 28 days")
      break;
    case 3:
      alert("month is march,it has 31 days")
      break;
    case 4:
      alert("month is april,it has 30 days")
      break;   
    case 5:
      alert("month is may,it has 31 days")
      break;    
    case 6:
      alert("month is june,it has 30 days")
      break;
    case 7:
      alert("month is july,it has 31 days")
      break;
    case 8:
      alert("month is august,it has 31 days")
      break;    
    case 9:
      alert("month is september,it has 30 days")
      break;
    case 10:
      alert("month is october,it has 30 days")
      break;
    case 11:
      alert("month is november,it has 30 days")
      break;
    case 1:
      alert("month is december,it has 31 days")
      break;
    default :
    alert("Please enter a valid month number");
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %
*/

let salary = Number(prompt("Please enter your salary"));

salary <= 20000 ? alert(`your handsome amount is ${(salary - (salary * 10)/100)}`) :
salary <= 40000 ? alert(`your handsome amount is ${(salary - (salary * 20)/100)}`) : alert(`your handsome amount is ${(salary - (salary * 30)/100)}`) ;
/*
//  if..else vs switch 

 8.
Implement the condition give below using`if..else` and`switch` statement.
  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`
*/

let marks = Number(prompt("Please enter your marks"));

if(marks > 100){
    alert("marks can't be greater than 100");
}else if(marks > 80 && marks <100){
    alert("Gread A");
}else if(marks > 50 && marks < 80){
    alert("Gread B")
}else if(marks > 30 && marks < 50){
    alert("Gread C")
}else{
    alert("Gread D")
}

switch(true){
    case marks > 100 :
        alert("marks can't be more than 100")
    break;
    case marks > 80 && marks < 100 :
        alert("Gread A");
    break;
    case marks > 50 && marks < 80 :
        alert("Gread B");
    break;
    case marks > 30 && marks < 50 :
        alert("Gread C");
    break;
    default :
        alert("Gread D");

}
/* 9. Weather app
  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("what is the weather like outside?")

weather === "sunny" ? alert("wear a t-shirt") :
weather === "rainy" ? alert("don't forget to take your raincoat") :
weather === "hot" ? alert("get a hanky") :
weather === "freezing" ? alert("get your sweter on") : alert("not a valid input");











































