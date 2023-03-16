
// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.
Clone the array before using sort method: [...arr]
*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101))
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9))
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(' '))
// - Add two new words in the strings array "called" and "sentance"
let newString = [...strings];
 newString.push('called', 'sentence');
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(newString.join(' '))
// - Remove the first word in the array (strings)
strings.shift(0);
// - Find all the words that contain 'is' use string method 'includes'
let isIncludes = newString.filter(element => element.includes('is'))
// - Find all the words that contain 'is' use string method 'indexOf'
let isContained = strings.filter((element, index) => {
  if(element.indexOf('is') !==-1){
    return element;
  }
})
// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log([...numbers].every(num => num%3===0))
// -  Sort Array from smallest to largest
let ascendingOrder = numbers.sort(function compareFunction(a, b) {
  return a - b;
})
console.log(ascendingOrder)
// - Remove the last word in strings
let newStrings = [...strings].pop()
// - Find largest number in numbers
let output = [...numbers].reduce(function(acc, curr){
    if(curr > acc){
    acc = curr;
    }
    return acc
}, 0)
console.log(output)
// - Find longest string in strings
let longestString = [...strings].reduce((a,b) => a.length > b.length ? a : b);
console.log(longestString);
// - Find all the even numbers
let isEven = [...numbers].filter(x => x % 2 === 0);
console.log(isEven);
// - Find all the odd numbers
let isOdd = [...numbers].filter(element => element % 2);
console.log(isOdd)
// - Place a new word at the start of the array use (unshift)
strings.unshift('History')
// - Make a subset of numbers array [18,9,7,11]
let subset = numbers.slice(3,7);
console.log(subset)
// - Make a subset of strings array ['a','collection']
let substring = newString.slice(2, 4);
console.log(substring)
// - Replace 12 & 18 with 1221 and 1881
// let replaceNumber1 = numbers.indexOf(12);
// numbers[replaceNumber1]=1221;
// let replaceNumber2 = numbers.indexOf(18);
// numbers[replaceNumber2] = 1881;
let replaceNumber = numbers.map(element => {
  if(element === 12){
    return 1221;
  }else if(element === 18){
    return  1881
  }else{
    return element;
  }
})
console.log(replaceNumber)

// - Replace words in strings array with the length of the word
let stringsLength = strings.map(element => element.length);
// - Find the sum of the length of words using above question
let stringSum = stringsLength.reduce((a, b) => a + b , 0);
console.log(stringSum)
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let firstNameJ = customers.filter(element => element.firstname[0]==='J').map(element => element.firstname)
console.log(firstNameJ)
// - Create new array with only first name
let firstName = customers.map(element => element.firstname);
console.log(firstName)
// - Create new array with all the full names (ex: "Joe Blogs")
let fullName = customers.map(element => element.firstname + " " + element.lastname);
console.log(fullName)
// - Sort the array created above alphabetically
let sortArray = [...fullName].sort();
console.log(sortArray)
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelFirstName = firstName.filter(element => {
  if(element.toLocaleLowerCase().includes('a') || element.toLowerCase().includes('e')|| element.toLowerCase().includes('i') || element.toLowerCase().includes('o') || element.toLowerCase().includes('u')){
    return true;
  }else{
    return false;
  }
})
console.log(vowelFirstName);


