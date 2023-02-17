// 1. Declare an empty array and store it in a variable.
let arr = [];
// 2. Now check the type of empty array you declared above.
console.log(arr);
// 3. Create an array named `colors` that contains five different names of colors as strings.
let colors = ["Red", "Green", "Yellow", "Black"]
// 4. Access the first color in the array and print it to the console using `console.log()`
console.log(colors[0]);
// 5. Access the third color in the array and print it to the console using `console.log()`
console.log(colors[2])
// 6. Access the last color in the array and print it to the console using `console.log()`
console.log(colors.length-1);
// 7. Write one line of code that changes the value of the first color in the list to "black" (overwriting the previous value).
colors[0] = "Black"
// 8. Write one line of code that changes the value of the last color in the list to "ultraviolet" (overwriting the previous value).
colors[colors.length-1] = "ultravoilet"
// 9. Now, Find the length of the array named `colors`.
console.log(colors.length);
// 10. Create a new variable called fourthColor and set it equal to the fourth color in the list.
let fourthColor = colors[3];
// 11. Add another color to the end of the list.
colors.push("White");
// 12. Add another color to the beginning of the list (use array method array.unshift('gray'))
colors.unshift('grey');
// 13. Remove the first color from the starting of the array
delete colors[0];
// 14. Remove the last color from the end of list, and then print the length of the array to the console one more time.
delete colors[colors.length - 1];
// 15. Remove the second color from the end of list.
delete colors[colors.length - 2]

// 16. Write a for loop to iterate through every element in the array and print each element to the console.
for(let i = 0; i < colors.length; i++){
    console.log(colors[i]);
}
// 17. Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: 3, purple or 0, blue etc.
for(let i = 0; i < colors.length; i++){
    console.log(`${i}: ${colors[i]}`);
}
// 18. Write a for..of loop to iterate through every element in the array and print each element to the console.
for(let color of colors){
    console.log(color)
}
// 19. Create a variable named lastColor that will always point to the last element of the colors array, no matter how many colors are in the list. (Hint: make use of the array's length property for this!)
color = colors[colors.length-1]
// 20. Add a new color `tomato` to the index 45. And check the length of the array. Use `console.log` to print.
colors[45] = 'Tomato';
console.log(colors.length);


// 1. Create an array named numbers and store 5 number values in it
let numbers = [1, 2, 3, 4, 5, 10];
// 3. Calculate the average of array items and print it to the console using console.log()
let sum = 0;
for(var number of numbers){
    sum += number
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
let average = sum/(numbers.length)
console.log(average);
// 4. Find the highest number in the array and print it to the console using console.log()
let highestNumber = numbers[0];
for(let number of numbers){
    if(number > highestNumber){
        highestNumber = number;
    }
}
console.log(highestNumber)
// 5. Find the lowest number in the array and print it to the console using console.log()

// 6. Find the even numbers in the array and print them to the console using console.log()
let even =[]
for(let number of numbers){
    if(number%2===0){
        even.push(number)
    }
}
console.log(even)
// 7. Find the odd numbers in the array and print them to the console using console.log()
let odd = [];
for(let number of numbers){
    if(number%2!==0){
        odd.push(number);
    }
}
console.log(odd);
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let division = []
for(number of numbers){
    if(number%5===0){
        division.push(number)
    }
}
console.log(division);
// 9. Log all the element of the array one by one
for(let number of numbers){
    console.log(number)
}
// 10. Find all the number in the array that is divisible by 3
let div = [];
for(let number of numbers){
    if(number%3===0){
        div.push(number)
    }
}
console.log(div)