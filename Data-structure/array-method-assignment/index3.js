let word = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot',
    'rhythm',
  ];
  
  // - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
 function findLongestword(word){
    return word.reduce((acc, curr) => acc.length < curr.length ? curr : acc, "");
 }
 console.log(findLongestword(word))
  // - Convert the above array "words" into an array of length of word instead of word.
  let convert = word.map(element => element.length);
  console.log(convert)
  // - Create a new array that only contains word with atleast one vowel.
let containVowel = word.filter(element => element.toLowerCase().includes('a') || element.toLowerCase().includes('e') || element.toLowerCase().includes('i') || element.toLowerCase().includes('o') || element.toLowerCase().includes('u'));
             
//or
function checkVowel(element) {
    return  (
      element.toLowerCase().includes('a') || 
      element.toLowerCase().includes('e') || 
      element.toLowerCase().includes('i') || 
      element.toLowerCase().includes('o') || 
      element.toLowerCase().includes('u') 
    )
  }
  let vowelWorld = word.filter(element => checkVowel(element));
  console.log(vowelWorld)
  // - Find the index of the word "rhythm"
 word.findIndex(element => element === 'rhythm');
  // - Create a new array that contians words not starting with vowel.
let consonantWorld = word.filter(element => !checkVowel(element[0]));
console.log(consonantWorld)
  // - Create a new array that contianse words not ending with vowel
  let consonantlastWord = word.filter(element => !checkVowel(element[element.length - 1]));
  console.log(consonantlastWord);
  //
  let number = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10, 9];
  
  // - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
  let sumArray = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log(sumArray);
  // - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
 let divisibleBy3 = numbers.filter(element => element % 3 === 0);
 console.log(divisibleBy3)
  // - Create a new array that contains only even numbers
 let isEVen = numbers.filter(element => element % 2 === 0);
 console.log(isEVen);
  // - Create  a new array that contains only odd numbers.
  let isOddNum = numbers.filter(function isOdd(element){
    return element % 2;
  })
  console.log(isOddNum)
  // - Create a new array that should have true for even number and false for odd numbers.
 let isOddEven = numbers.filter(element => {
    if(element % 2 ===0){
      return  true
    }else{
      return  false
    }
 })
  // - Sort the above number in assending order.
  let asscendingOrder = numbers.sort((a, b) => a-b)
  console.log(asscendingOrder)
  // - Does sort mutate the original array?
  // yes
  // - Find the sum of the numbers in the array.
  let findSum = numbers.reduce((acc, curr) => acc + curr);
  console.log(findSum)
  //- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
  function averageNumbers(find){
    return findSum/(numbers.length)
  }
console.log(averageNumbers(find))
  
  let string = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace',
  ];
  
  // - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
  
  function averageWordLength() {
    let averageLength = string.reduce((a,b) => a + b.length,0)
    return averageLength/string.length
  }
  console.log(averageWordLength())