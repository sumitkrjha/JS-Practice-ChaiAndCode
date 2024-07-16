//Activity 1 : Variable Declaration
//Task 1: Declare a variable using "var", assign it a number and log the value to the console
var number = 1;
console.log(number);

//Task 2: Declare a variable using "let", assign it a string and log the value to the console
let string = "My Name is Sumit";
console.log(string);

//Activity 2 : Constant Declaration
//Task 3: Declare a variable using "const", assign it a boolean value and log the value to the console
const boolean = false;
console.log(boolean);

//Activity 3: Data Types
//Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using "typeof" operator.

const value = 5;
const pName = "Sumit";
const isPerson = true;
const address = { State: "New Delhi", Country: "India" };
const skills = ["C++", "ReactJS", "Tailwind CSS", "ExpressJS", "MongoDB"];

const data = [
  ["Value is of type:", typeof value],
  ["Name is of type:", typeof pName],
  ["isPerson is of type:", typeof isPerson],
  ["Address is of type:", typeof address],
  ["Skills is of type:", typeof skills],
];
console.table(data);

//Activity 4 : Reassigning Variables
//Task 5: Declare a varibale "let", assign it an initial value, reassign and new value, and log both values to the console.

var pname = "Sumit";
pname = "Hitesh";

console.table([pname, pname]);
//Let can be reassigned but can't be redeclared

//Activity 5 : Understanding Const
//Task 6 : Try reassigning a variable declared with const and observe the error

const mark = 78;
mark = 98;
console.log(mark);
//TypeError: Assignment to constant variable.
