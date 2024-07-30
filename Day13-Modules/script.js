// Task 1
const add = require("./Day13-Modules");
console.log(add(2, 4));

// Task 2
const person = require("./Day13-Modules");
console.log(person.desc());

// Task 3
const { add, sub, mul } = require("./Day13-Modules");
console.log(add(2, 3));
console.log(sub(2, 3));
console.log(mul(2, 3));

// Task 4
const add = require("./Day13-Modules");
console.log(add(2, 3));

// Task 5
const rectange = require("./Day13-Modules");
console.log("Lenght of rectange is:", rectange.len);
console.log("Breadth of rectange is:", rectange.bred);
console.log("Area of rectange is:", rectange.area(rectange.len, rectange.bred));
console.log(
  "Parameter of rectange is:",
  rectange.parameter(rectange.len, rectange.bred)
);
