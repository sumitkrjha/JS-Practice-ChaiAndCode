//Activity 1 : If-Else Statements
// Task 1 : Write a program to check if a number is positive, negative or zero and log the result to the console.
function whatIs(number) {
  if (number == 0) console.log("Zero");
  else if (number < 0) console.log("Negative");
  else console.log("Positive");
}

whatIs(10);
whatIs(0);
whatIs(-10);

//Task 2 : Write a program to check if a person is eligible to vote (age>=18) and log the result to the console.
function eligiblity(age) {
  if (age >= 18) console.log("Eligible to vote. Happy Voting!");
  else console.log("Sorry! Can't Vote.");
}

eligiblity(18);
eligiblity(17);
eligiblity(19);

//Acitivity 2 : Nested If-Else Statements
//Task 3 : Write a program to find the greatest of three numbers using nested if-else statement
function greatest(num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3) {
      console.log(num1, " is the greatest");
    } else console.log(num3, " is the greatest");
  } else if (num2 > num3) {
    console.log(num2, " is the greatest");
  } else console.log(num3, " is the greatest");
}

greatest(-1, -7, -5);

//Acitivity 3 : Switch Case
//Task 4 : Write a program using switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
function dayOfTheWeek(number) {
  switch (number) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log(
        "Enter between 1-7 only, unless you have some additional days in a week :)"
      );
  }
}
dayOfTheWeek(1);
dayOfTheWeek(2);
dayOfTheWeek(3);
dayOfTheWeek(4);
dayOfTheWeek(5);
dayOfTheWeek(6);
dayOfTheWeek(7);
dayOfTheWeek(8);

//Task 5 : Write a program using switch case to assign a grade ("A", "B", "C", "D", "F") based on a score and log the grade to the console.

function grade(mark) {
  const marks = mark;
  switch (true) {
    case marks >= 90:
      console.log("A");
      break;
    case marks >= 80:
      console.log("B");
      break;
    case marks >= 70:
      console.log("C");
      break;
    case marks >= 60:
      console.log("D");
      break;
    default:
      console.log("F");
  }
}

grade(95);
grade(85);
grade(75);
grade(65);
grade(55);
grade(0);
grade(-2);

//In this case we use true as an expression as we are checking if any of the condition will be true. Eg, grade(95) as soon as the switch goes to case 1 it is found that marks>=90 so it is true and the switch is also (true) hence it will print "A".

//Activity 4 : Conditional (Ternary) Operator
//Task 6 : Write a program that uses ternary operator to check if a number is even or odd and log the result to the console.

const number = 11;
const result = number % 2 === 0 ? "Even" : "Odd";
console.log(result);

//Activity 5 : Combining Conditions
//Task 7 : Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console

function leap(year) {
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    console.log("Leap Year");
  } else console.log("No Leap Year");
}

leap(1700);
