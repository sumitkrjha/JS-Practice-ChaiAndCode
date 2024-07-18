//Activity 1 : Function Declaration
// Task 1 : Write a function to check if a number is even or odd and then log the result to console
function evenodd(number) {
  if (number % 2 == 0) console.log("Even");
  else console.log("Odd");
}
evenodd(10);

// Task 1 : Write a function to calculate square of a number and then log the result to console
function square(n) {
  console.log(n * n);
}
square(2);

//Activity 2 : Function Expression
// Task 3 : Write a function expression to find the maximum of two numbers, log the result

let maxi = function (a, b) {
  let ans = a >= b ? a : b;
  console.log(ans);
};

maxi(10, 20);

//Task 4 : Write a function expression to concatenate two string and log the result
let concat = function (a, b) {
  let c = a + " " + b;
  console.log(c);
};
concat("alpha", "charlie");

//Activity 3 : Arrow Function
// Task 5 : Write an arrow function to calculate the sum of two numbers and return the result
let sumOfTwo = (a, b) => {
  return a + b;
};
console.log(sumOfTwo(2, 33.5));

// Task 6 : Write an arrow function to check if a string contains a special character or not and return boolean.
let doesContain = (str, char) => {
  let a = str.length;
  for (let i = 0; i < a; i++) {
    if (str[i] === char) {
      return true;
    }
  }
  return false;
};
console.log(doesContain("hello", "b"));

//Activity 4 : Function Parameters and default values
//Task 7 : Write a function that takes two parameters and return their product. Provide a default value for the 2nd parameter

let product = (a, b = 5) => {
  return a * b;
};

console.log(product(2, 3));

// Task 8 : Write a function that takes two parameters a person's name and age return a greeting message. Provide a default value for the 2nd parameter

let greeting = (naam, age = 22) => {
  console.log("Greeting!", naam, age);
};
greeting("hitesh", 16);

//Activity 5 : High Order Function
// Task 9 : Write a higher order function that takes a function and a number and calls that function that many times.
function call(number) {
  if (number == 0) return;
  console.log("This is call", number);
  number--;
  call(number);
}
let times = (fun, number) => {
  fun(number);
};

times(call, 2);

// Task 10 : Write a higher order function that takes 2 function and a value. Apply the first function to the value and second function to the result.

function iseven(marks) {
  if (marks % 2 == 0) return "even";
  return "false";
}

function color(str) {
  if (str === "even") return "Blue";
  return "Red";
}

let colorBall = (fn1, fn2, value) => {
  let ans = fn1(value);
  console.log(fn2(ans));
};

colorBall(iseven, color, 3);
