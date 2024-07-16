//Activity 1 : Arithmetic Operations
//Task 1 : Write a program to add 2 numbers and log the result to the console.
let a = 10,
  b = 10;
console.log(a + b);

//Task 2 : Write a program to subtract 2 numbers and log the result to the console.
(a = 10), (b = 10);
console.log(a - b);

//Task 3 : Write a program to multiply 2 numbers and log the result to the console.
(a = 10), (b = 10);
console.log(a * b);

//Task 4 : Write a program to divide 2 numbers and log the result to the console.
(a = 10), (b = 10);
console.log(a / b);

//Task 5 : Write a program to add 2 numbers and log the result to the console.
(a = 11), (b = 10);
console.log(a % b);

//Activity 2 :Assignment Operations
//Task 6 : USe the "+=" operator to add a number to a variable and log the result to the console.
let variable1 = 10;
variable1 += 20;
console.log(variable1);

//Task 7 : USe the "-=" operator to subtract a number to a variable and log the result to the console.
variable1 -= 20;
console.log(variable1);
//As it is declared using "let" so the variable1 after the Task 6 hold the value 30 and so at the end of Task 7 the output is 10.

//Activity 3 : Comparison Operations
//Task 8 : Write a program to compare two numbers using ">" and "<" and log the result to the console.
let value1 = 10,
  value2 = 20;
console.log(value1 > value2);
console.log(value1 < value2);

//Task 9 : Write a program to compare two numbers using ">=" and "<=" and log the result to the console.
console.log(value1 >= value2);
console.log(value1 <= value2);

//Task 10 : Write a program to compare two numbers using "==" and "===" and log the result to the console.
(value1 = 5), (value2 = "5");
console.log(value1 == value2); //It type coerce and convert both to numbers and so the log is "true".
console.log(value1 === value2); //It strictly checks the values and as both have different types so the log is "false".

//Activity 4 : Logical Operations
//Task 11 : Write a program that uses the && operator to combine two conditions and log the result to the console.
(value1 = false), (value2 = 6);
console.log(value1 && value2); //IF both are truty (i.e., anything but 0) then the last value (value2) will be log else 0

//Task 12 : Write a program that uses the || operator to combine two conditions and log the result to the console.
console.log(value1 || value2); //It log the truty value, if both are truty then it prints the first value(value1) or it can be explained as, as soon as || finds a truty value it log that value and do not go further.

//Task 13 : Write a program that uses the ! operator to negate a condition and log the result to the console.
console.log(!value2); //As value1 holds false after the Task 12 so the output is negative of false, true. Converts false to true and vice versa

//Activity 5 : Ternary Operator
//Task 14 : Write a program that uses the ternary operator to check whether a number is positive or negative and log the result to the console.
value1 = -10;
const isPositive = value1 < 0 ? "Negative" : "Positive";
console.log(isPositive);
