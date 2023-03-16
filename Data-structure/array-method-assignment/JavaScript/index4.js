
let persons = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' },
    { name: 'John', grade: 17, sex: 'M' },
    { name: 'Arya', grade: 14, sex: 'F' },
  ];
  
  // Create an array peopleName and store value of name key from persons array
  let peopleName = persons.map(element => element.name)
  // Create an array peopleGrade and store the value of grade key from persons array
  let peopleGrade = persons.map(element => element.grade)
  // Create an array peopleSex and store the value of sex key from persons array
  let peopleSex = persons.map(element => element.sex)
  // Log the filtered named of people in peopleName that starts with 'J' or 'P'
  let filteredName = peopleName.filter(element => element.startsWith('J') || element.startsWith('P') ? true : false);
  console.log(filteredName)
  // Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
  let lengthStartAC = peopleName.filter(element => element.startsWith('A') || element.startsWith('C'))
  console.log(lengthStartAC)
  // Log all the filtered male ('M') in persons array
 let filterMale  = persons.filter(element => element.sex === 'M');
 console.log(filterMale)
  // Log all the filtered female ('F') in persons array
  let filterFemale = persons.filter(element => element.sex === 'F');
  console.log(filterFemale)
  // Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
  let femaleFC = filterFemale.filter(element => element.name.startsWith('J') || element.name.startsWith("C") ? true : false);
  console.log(femaleFC)
  // Log all the even numbers from peopleGrade array
let evenGrade = peopleGrade.filter(element => element%2===0);
console.log(evenGrade)
  // Find the first name that starts with 'J' in persons array and log the object
let firstNameJ = persons.find(element => element.name.startsWith('J'));
console.log(firstNameJ)
  // Find the first name that starts with 'P' in persons array and log the object
let firstNameP = persons.find(element => element.name.startsWith('P'));
  console.log(firstNameP)
  // Find the first name that starts with 'J', grade is greater than 10 and is a female
let femalenameJ = persons.find(element => element.name.startsWith('J') && element.grade > 10 && element.sex === 'F')
console.log(femalenameJ)
  // Filter all the female from persons array and store in femalePersons array
  let femalePersons = persons.filter((person) => person.sex === 'F')
  // Filter all the male from persons array and store in malePersons array
 let malepersons = persons.filter((person) => person.sex==="M")
  // Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce(
    (acc, curr) => acc + curr , 0)
  // Find the average grade
gradeTotal/gradeTotal.length;
  // Find the average grade of male
   let maleGradeAvg = persons.filter((p) => p.sex === 'M')
   maleGradeAvg.reduce((acc, curr) => {return acc + curr.grade}, 0)/maleGradeAvg.length;
  // Find the average grade of female
  let femaleGradeAvg = persons.filter((p) => p.sex === 'M')
  femaleGradeAvg.reduce((acc, curr) => {return acc + curr.grade}, 0)/femaleGradeAvg.length;
  // Find the highest grade
  let highestGrade = peopleGrade.reduce((acc, curr) => {
    if(acc<curr){
        acc = curr
    }
    return acc
  },0)
  // Find the highest grade in male
  let maleHighestGrade = [...maleGradeAvg].sort((a,b) => a-b).pop();
  // Find the highest grade in female
  let femaleHihestGrade = [...femaleGradeAvg].sort((a,b) => a-b).pop()
  // Find the highest grade for people whose name starts with 'J' or 'P'
let nameWithJorP = persons.filter((person) => 
person.name.startsWith('J')||
person.name.startsWith('p')
);

let gradeWithNameJorP = nameWithJorP.map((person) =>
person.grade);

[...gradeWithNameJorP].sort((a,b) => a-b).pop()
  // Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
 peopleGrade.sort((a,b) => a-b);
 console.log(peopleGrade)
  // Sort the peopleGrade in descending order
 peopleGrade.sort((a,b) => b-a);
  // Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
 [...peopleGrade].sort((a,b) => b-a)
 console.log(peopleGrade)
  // Sort the array peopelName in ascending `ABCD..Za....z`
let peopleNamee = peopleName.sort()
  // Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
 peopleNamee.sort()