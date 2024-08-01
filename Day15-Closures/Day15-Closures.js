// // Activity 1 : Understanding Closures
// // Task 1 : Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

// function outer() {
//   let variable = 12;
//   return function inner() {
//     console.log(`Outer variable's value is : ${variable}`);
//   };
// }

// const innerFunc = outer();
// innerFunc();

// // Task 2 : Create a closure that maintain a private counter, implement functions to increments and get the current value of the counter.
// function keepCounter() {
//   let counter = 0;
//   function incrementCounter() {
//     counter++;
//   }
//   function getCurrentCounter() {
//     console.log(`Current counter is : ${counter}`);
//   }

//   return { incrementCounter, getCurrentCounter };
// }

// const counter = keepCounter();
// counter.getCurrentCounter();
// counter.incrementCounter();
// counter.getCurrentCounter();

// // Activity 2 : Practical Closures
// // Task 3 : Write a function that generates unique Ids. Use a closure to keep track of the last generated Id and increment it with each call.
// function generateId() {
//   let uniqueId = Math.floor(Math.random() * 10);
//   return function lastGeneratedId() {
//     uniqueId++;
//     return uniqueId;
//   };
// }

// const id = generateId();

// console.log(id());
// console.log(id());

// // Task 4 : Create a closure that captures a user's name and returns a function that greets the user by name.
// function userName(name) {
//   let username = name;
//   return function greetUser() {
//     console.log(`Hi ${username}`);
//   };
// }

// const person = userName("Sumit");
// person();

// // Activity 3 : Closures in Loops
// // Task 5 : Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

// function indexedFunction(index) {
//   return function correctIndex() {
//     console.log(`My index is ${index}`);
//   };
// }
// const arrOfFunctions = [];
// for (let i = 0; i < 5; i++) {
//   arrOfFunctions[i] = indexedFunction(i);
// }

// arrOfFunctions.forEach((func) => func());

// // Activity 4 : Module Pattern
// // Task 6 : Use Closures to create a simple module for managing a collection of items. Implement methods to add, remove and list items.

// function items() {
//   let items = [];
//   function addItem(...item) {
//     items.push(...item);
//   }
//   function removeItem(item) {
//     items = items.filter((items) => items !== item);
//   }
//   function showItem() {
//     console.log(`Items are : ${items}`);
//   }
//   return { addItem, removeItem, showItem };
// }

// let person = items();
// person.addItem("Item1");
// person.showItem();
// person.addItem("Item2", "Item3");
// person.showItem();
// person.removeItem("Item3");
// person.showItem();

// // Activity 5 : Memoization
// // Task 7 : Write a function that memorizes the results of another function. Use a closure to store the results of previous computations.
// function memoize(fn) {
//   const cache = {};

//   return function (...args) {
//     const key = JSON.stringify(args);
//     if (cache[key] === undefined) {
//       cache[key] = fn(...args);
//     }
//     return cache[key];
//   };
// }

// const add = (a, b) => a + b;
// const memoizedAdd = memoize(add);
// console.log(memoizedAdd(1, 2));
// console.log(memoizedAdd(2, 2));
// console.log(memoizedAdd(1, 2));

// Task 8 : Create a memorized version of a function that calculates the factorial of a number.

function getFactorial() {
  let cache = {};
  return function factorial(num) {
    if (num in cache) {
      console.log(
        `Factorial of ${num} already in memory. That is ${cache[num]}`
      );
    } else {
      let fact = 1;
      for (let i = 1; i <= num; i++) {
        fact *= i;
      }
      cache[num] = fact;
      console.log(`Factorial of ${num} is ${fact} `);
    }
  };
}

const factorial = getFactorial();
factorial(3);
factorial(4);
factorial(5);
factorial(3);
