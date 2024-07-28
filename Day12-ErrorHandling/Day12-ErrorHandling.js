// Activity 1 : Basic Error Handling with Try and Catch
// Task 1 : Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwError() {
  try {
    throw new Error("This function will throw an error");
  } catch (error) {
    console.error("Error encountered:", error);
  }
}
throwError();

// Task 2 : Write a function that divides two numbers and throw an error if the denominator is zero. Use a try-catch block to handle error.
function divide(num1, num2) {
  try {
    if (num2 === 0) throw new Error("Denominator can't be zero");
    console.log(num1 / num2);
  } catch (error) {
    console.error("Error: ", error);
  }
}

divide(4, 0);

// Activity 2 : Finally Block
// Task 3 : Write a script that includes a try-catch block and a finally block. Log messages in the try, catch and finally block to observe the execution flow.

function final() {
  try {
    console.log("This is try block");
    throw new Error("Error hain bhai");
  } catch (error) {
    console.error("This is error catch block", error);
  } finally {
    console.log("This is finally block");
  }
}
final();

// Activity 3 : Custom Error Objects
// Task 4 : Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class customError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}
function divisor(num, deno) {
  try {
    if (deno === 0) throw new customError("Denominator can't be zero");
    console.log(num / deno);
  } catch (error) {
    console.error("Error Found:", error);
  }
}

divisor(4, 0);

// Task 5 : Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the error using a try-catch block.

function validateUser(user) {
  try {
    if (user.name.length === 0) throw new Error("User name can't be empty");
    else console.log(`${user.name} sucessfully validated!`);
  } catch (error) {
    console.error("Error while validating:", error);
  }
}

let obj = { name: "" };
validateUser(obj);

// Activity 4 : Error Handling in Promises
// Task 6 : Create a promise that randomly resolves and rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const newPromise = new Promise((resolve, reject) => {
  let randomBoolean = Math.random() < 0.3;
  if (randomBoolean) resolve("Promise is resolved.");
  else reject("Promise is rejected");
})
  .then((msg) => console.log(msg))
  .catch((error) => console.log(error));

// Task 7 : Use try-catch using an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

const promiseOne = new Promise((resolve, reject) => {
  let randomBoolean = Math.random() < 0.3;
  if (randomBoolean) resolve("Promise is resolved.");
  else reject("Promise is rejected");
});

const asyncFunction = async () => {
  try {
    const res = await promiseOne;
    console.log(res);
  } catch (error) {
    console.error("Error :", error);
  }
};

asyncFunction();

// Activity 5 : Graceful Error handling in fetch()
// Task 8 : Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch("https://galatendpoint.com")
  .then((msg) => msg.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error while Fetching:", error));

// Task 9 : Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
const handleWrongFetch = async () => {
  try {
    const response = await fetch("https://galatendpoint.com");
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.error("Error while fetching : ", error);
  }
};

handleWrongFetch();
