// Activity 1 : Creating and Exporting Modules
// Task 1 : Create a module that exports a function that adds two numbers. Import and use this module in another script.
function add(a, b) {
  return a + b;
}
module.exports = add;

// Task 2 : Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

let person = {
  pname: "Sumit Kumar Jha",
  age: 23,
  desc: () => {
    return `${person.pname} is ${person.age} years old`;
  },
};

module.exports = person;

// Activity 2 : Named and Default Exports
// Task 3 : Create a module that exports multiple functions using named exports. Import and use these functions in another script.

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
module.exports = { add, sub, mul };

// Task 4 : Create a module that exports a single function using default exports. Import and use this function in another script.
function add(a, b) {
  return a + b;
}
module.exports = add;

// Activity 3 : Importing Entire Modules
// Task 5 : Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
const len = 2;
const bred = 3;

const area = (len, bred) => len * bred;
const parameter = (len, bred) => 2 * (len + bred);

module.exports = { len, bred, area, parameter };

// Activity 4 : Using Third Party Modules
// Task 6 : Install a third party module (e.g.,lodash) using npm. Import and use a function from this module in a script.
const lodash = require("lodash");
const arr = [1, 2, 3, 4, 5, 6];
const response = lodash.partition(arr, (n) => n % 2);
console.log(response);

// Task 7 : Install a third party module (e.g.,axios) using npm. Import and use this module to make a network request in a script.
const axios = require("axios");
const username = "sumitkrjha";
axios
  .get("https://api.github.com/users/" + username)
  .then((res) => console.log(res.data.blog)) //Gives the blog URL of the github user from the fetched data
  .catch((error) => console.error(error));
