// Activity 1 : Array Creation and Access
// Task 1 : Create an array of number from 1 to 5 and log the array to the console
let number = [1, 2, 3, 4, 5];
console.log(number);

// Task 2 : Access the first and last element of the array and log them to the console.
console.log(number[0], number[4]);

//Activity 2 : Array Methods(Basic)
//Task 3 : Use the "push" method to add the element at the end of the array and log the updated array
number.push(6);
console.log(number);

//Task 4 : Use the "pop" method to remove the last element of the array and log the updated array
number.pop();
console.log(number);

//Task 5 : Use the "shift" method to remove the first element from the array and log the updated array
number.shift();
console.log(number);

//Task 6 : Use the "unshift" method to add a new element to the beginning of the array and log the updated array
number.unshift(1);
console.log(number);

//Activity 3 : Array Methods(Intermediate)
//Task 7 : Use the map method to create a new array where each number is double and log the new array
let newNumber = number.map((number) => number * 2);
console.log(newNumber);

//Task 8 : Use the filter method to create a new array with only even numbers and log the new array
newNumber = number.filter((items) => items % 2 !== 0);
console.log(newNumber);

//Task 9 : Use the reduce method to calculate the sum of all numbers in the array and log the result

let sum = number.reduce((temp, number) => {
  return temp + number;
}, 1);
console.log(sum);

//Activity 4 : Array Iteration
//Task 10 : Use a for loop to iterate over the array and log each value
for (let i = 0; i < number.length; i++) console.log(number[i]);

//Task 11 : Use the forEach method to iterate over the array and log each element to the console.
number.forEach((element) => console.log(element));
number.map((element) => console.log(element));

//Activity 5 : Multi-dimensional Arrays
//Task 12 : Create a 2D array and log the entire array to the console.

let TwoD = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(TwoD);

//Task 13 : Access and log a specific element from that 2D array
console.log(TwoD[1][2]);
