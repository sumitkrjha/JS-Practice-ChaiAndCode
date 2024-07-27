// Activity 1 : Basic Event Handling
// Task 1 : Add a click event listener to a button that changest the text content of a paragraph
let span = document.getElementById("introduction");
let button = document.getElementById("changeIntro");
button.addEventListener("click", () => {
  if (button.innerHTML == "Forgot my name :(") {
    span.innerHTML = "Hi! This is Sumit Kumar Jha";
    button.innerHTML = "Know What i'm upto";
  } else {
    span.innerHTML = "I'm practicing JS from ChaiCode";
    button.innerHTML = "Forgot my name :(";
  }
});

// Task 2 : Add a double click event listener to an image that toggles its visibility
let img = document.querySelector("img");
img.addEventListener("dblclick", () => {
  img.style.visibility = "hidden";
});

// Activity 2 : Mouse Events
// Task 3 : Add a mouseover event listener to an element that changes its background color
img.addEventListener("mouseover", () => {
  img.style.backgroundColor = "teal";
});

// Task 4 : Add a mouseout event listener to an element that resets its background color
img.addEventListener("mouseout", () => {
  img.style.backgroundColor = "transparent";
});

// Activity 3 : Keyboard Events
// Task 5 : Add a keydown event listener to an input field that logs the key pressed to the console
let input = document.querySelector("input");
input.addEventListener("keydown", () => {
  console.log(`Key Pressed is ${event.key}`);
});

// Task 6 : Add a keyup event listener to an input field that displays the current value in a paragraph
let para = document.querySelector("p");
input.addEventListener("keyup", () => {
  para.textContent = input.value;
});

// Activity 4 : Form Events
// Task 7 : Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
});

// Task 8 : Add a change event listener to a select dropdown that displays the selected value in a paragraph
let select = document.querySelector("select");
let genderPara = document.getElementById("gender");
select.addEventListener("change", () => {
  genderPara.textContent = `You have selected : ${select.value}`;
});

// Activity 5 : Event delegation
// Task 9 : Add a click event listener to a list that logs the text content of the clicked list item using event delegation
let ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});

// Task 10 : Add an event listener to a parent element that listens for events from dynamically added child elements
let addItemBtn = document.getElementById("addItem");
let parent = document.getElementById("parent");
addItemBtn.addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item" + " " + (parent.children.length + 1);
  parent.appendChild(newItem);
});

let showItem = document.getElementById("showItem");
parent.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    let result = e.target.textContent;
    console.log(result);
    showItem.textContent = result;
  }
});
