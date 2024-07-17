//Activity 1 : For Loop
//Task 1 : Write a program to print 1 to 10 using for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Task 2 : Write a program to print table of 5 using for loop
for (let i = 1; i <= 10; i++) {
  console.log("5 x ", i, " = ", 5 * i);
}

//Activity 2 : While Loop
//Task 3 : Write a program to find the sum of 1 to 10 using while loop
let n = 10;
let sum = 0;
while (n != 0) {
  sum += n;
  n--;
}
console.log(sum);

//Task 4 : write a program to print 10 to 1 using while loop
n = 10;
while (n != 0) {
  console.log(n);
  n--;
}

//Activity 3 : Do-While Loop
//Task 5 : Write a program to print number from 1 to 5 using a do while loop
n = 1;
do {
  console.log(n);
  n++;
} while (n <= 5);

//Task 6 : Write a program to calculate factorial of a number using a do while loop
n = 5;
let copyN = n;
let ans = 1;
do {
  ans *= n;
  n--;
} while (n != 0);

console.log("Factorial of : ", copyN, " is : ", ans);

//Activity 4 : Nested Loops
//Task 7 : Write a program to print a pattern using nested for loops.
//*
//* *
//* * *
//* * * *
//* * * * *

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}

//Activity 5 : Loop control statements
// Task 8 : Print 1 to 10 but skip 5 using continue statement

for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  console.log(i);
}

//Task 9 : Print 1 to 10 but break at 7 using break statement
for (let i = 1; i <= 10; i++) {
  if (i == 7) break;
  console.log(i);
}
