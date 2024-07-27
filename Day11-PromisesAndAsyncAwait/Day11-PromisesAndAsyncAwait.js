// // Activity 1 : Understanding Promises
// // Task 1 : Create a promise that resolves with a message after a 2-second timeout and log the message to the console
// const promiseOne = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("First Promise, resolved after 2 seconds");
//   }, 2000);
// });

// promiseOne.then((message) => console.log(message));

// // Task 2 : Create a promise that rejects with an error message after a 2-second timeout handle the error using .catch()

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Promise rejected after 2 seconds");
//   }, 2000);
// }).catch((error) => console.log(error));

// // Activity 2 : Chaining Promises
// // Task 3 : Create a sequence of promises that stimulate fetching data from a server. Chain the promise to log message in a specific order.
// const fetchData = (data) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Fetched Data : ${data}`);
//     }, 1000);
//   });
// };

// fetchData("Data 1")
//   .then((msg) => {
//     console.log(msg);
//     return fetchData("Data 2");
//   })
//   .then((msg) => {
//     console.log(msg);
//     return fetchData("Data 3");
//   })
//   .then((msg) => {
//     console.log(msg);
//     return fetchData("Data 4");
//   })
//   .then((msg) => console.log(msg));

// // Activity 3 : Using Async/Await
// // Task 4 : Write an async function that await for a promise to resolve and then logs the resolved value

// const response = async () => {
//   const msg = await new Promise((resolve) => {
//     resolve("Awaited Promise is resolved");
//   });
//   console.log(msg);
// };
// response();

// // Task 5 : Write an async function that handles a rejected promise using try-catch and logs the error message.

// const result = async () => {
//   try {
//     const res = await new Promise((resolve, reject) => {
//       reject("Promise has been rejected");
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };
// result();

// // Activity 4 : Fetching Data from an API
// // Task 6 : Use the fetch API to get the data from a public API and log the response data to the console using promises.
// fetch("https://randomuser.me/api/?page=1&results=1&seed=ab")
//   .then((msg) => msg.json())
//   .then((data) => {
//     console.log(data.results[0].name.first);
//   })
//   .catch((err) => console.error(err));

// Task 7 : Use the fetch API to get the data from a public API and log the response data to the console using async/await.
async function fetchData() {
  try {
    const res = await fetch(
      "https://randomuser.me/api/?page=1&results=1&seed=ab"
    );
    const data = await res.json();
    console.log(data.results[0].email);
  } catch (error) {
    console.error("Error fetching data : ", error);
  }
}

fetchData();

// Activity 5 : Concurrent Promises
// Task 8 : Use Promise.all to wait for multiple promises to resolve and then log all their values
const promiseAlpha = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Alpha promise is resolved");
  }, 1000);
});
const promiseBeta = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Beta promise is resolved");
  }, 2000);
});
const promiseGamma = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Gamma promise is resolved");
  }, 3000);
});

Promise.all([promiseAlpha, promiseBeta, promiseGamma]).then((msg) =>
  console.log(
    `Promise.all has resolved all the promises. Their values are : `,
    msg
  )
);

// Task 8 : Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promiseAlpha, promiseBeta, promiseGamma]).then((msg) =>
  console.log(`Using Promise.race the first resolved promise : `, msg)
);
