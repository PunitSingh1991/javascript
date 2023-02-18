//What will be the output and explain the reason.
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
//Answer the following with reason after going through the above code:

[10] === [10]
//What is the value of obj? // answer
obj == newObj//false both are the different in the same momery location
obj === newObj//false   both are the different in the same momery location
user === newObj//false   both are the different in the same momery location
user == newObj//false   both are the different in the same momery location
user == obj//true
arr == arr2//true
arr === arr2//true
//What's will be the value of person1 and person2 ? Explain with reason. Draw the memory representation diagram.
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1);//{name: 'Alex', age: 30}
console.log(person2);//{name: "John", age: 50} // same memory location 
//What will be the output of the below code:
var brothers = ['Bran', 'John'];
var users = {
  name: 'Sansa',
};
users.brothers = brothers;
brothers.push('Robb');
console.log(users.brothers === brothers); //1. true
console.log(users.brothers.length === brothers.length); //true

