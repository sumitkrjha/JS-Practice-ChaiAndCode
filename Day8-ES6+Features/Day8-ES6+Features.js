// Activity 1 : Template Literals
// Task 1 : Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let personName = "Sumit",
  personAge = 23;
let string = `The name of the candidate is ${personName}, ${personAge} years old.`;
console.log(string);

// Task 2 : Create a multi line string using template literals and log the string to the console
string = `
${personName} is a recent B.Tech grad with 9.5 CGPA.
This ${personAge} years old is proficient in the MERN stack web development, having developed GenAI products.
${personName} has also very strong grip over Computer fundamentals, such as OOPS, OS and Networks.
`;

console.log(string);

// Activity 2 : Destructuring
// Task 3 : Use array destructuring to extract first and second element from the array of numbers, and log them to the console.

let number = [1, 2, 3, 4];
let [a, second] = number;
console.log(a, second);

// Task 4 : Use object destructuring to extract the title and author from a book object and log them to the console.
let book = {
  title: "Breaking India",
  author: "Rajiv Malhotra",
  YOL: 2011,
};

let { title, author, YOL } = book;
console.log(title, author, YOL);

// Activity 3 : Spread and rest opertors
// Taks 5 : Use the spread operator to create a new array that has all the elements of the existing array plus the additional elements, log the new array to the console.

let newNumbers = [...number, 5, 6, 7];
console.log(newNumbers);

// Task 6 : Use the rest opertor in a function to accept an arbitary number of arguments, sum them and return the result

function sum(...nums) {
  let sum = 0;
  for (let number of nums) {
    sum += number;
  }
  return sum;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Activity 4 : Default Parameters
// Task 7 : Write a function that takes two parameters and returns their prodcuts, with the second parameter having a default value=1, log the result with and without the second parameter.

function product(param1, param2 = 1) {
  return param1 * param2;
}

console.log(product(2));
console.log(product(2, 3));

// Activity 5 : Enhanced Objectn Literals
// Task 8 : Use the enhanced object literals to create a object with methods and properties, and log the object to the console.

let person = {
  personAge,
  personName,
  description() {
    return `The name of the candidate is ${this.personName}, ${this.personAge} years old.`;
  },
};

console.log(person);

// Task 9 : Create an object with computed property names based on variables and log the object to the console

person = {
  [personAge]: "Person Age",
  [personName]: "Person Name",
};

console.log(person);
