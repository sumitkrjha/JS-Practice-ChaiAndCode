// Activity 1 : Selecting and Manipulating Elements
// Task 1 : Select an HTML element by its Id and change its text content.

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

// Task 2 : Select an HTML element by its class name and change its bg color.
let container = document.getElementsByClassName("container")[0];
let bgChangeBtn = document.getElementById("changeBgColor");

bgChangeBtn.addEventListener("click", () => {
  container.style.backgroundColor = "lightblue";
});

// Activity 2 : Creating and Appending Elements
// Task 3 : Create a new div element with some text and append it to the body
let newDiv = document.createElement("div");
newDiv.textContent = "I'm a MERN developer";
document.body.appendChild(newDiv);

// Task 4 : Create a new list element and add it to the existing ul list.
let ulList = document.getElementById("skills");
let liList = document.createElement("li");
// liList.textContent = "ReactJS";
// ulList.appendChild(liList);

// --> To add multiple li under the ul list <--

let skills = ["ReactJS", "TailwindCSS", "NodeJS", "ExpressJS", "MongoDB"];
skills.forEach((skill) => {
  liList = document.createElement("li");
  liList.textContent = skill;
  ulList.appendChild(liList);
});

// Activity 3 : Removing Elements
// Task 5 : Select an HTML element and remove it from the DOM
newDiv.remove();

// Task 6 : Remove the last child of a specific HTML element
ulList.removeChild(ulList.lastChild);

// Activity 4 : Modifying Attributes and Classes
// Task 7 : Select an HTML element and change one of its attributes (e.g, src of an img tag)
let img = document.querySelector("img");
img.src = "profilePhoto.png";

// Task 8 : Add and remove a CSS class to/from an HTML element
img.addEventListener("click", () => {
  img.classList.toggle("bgToggle");
});

// Activity 5 : Event Handling
// Task 9 : Add a click event listener to a button that changes the text content of a paragraph.
let projectBtn = document.getElementById("projects");
projectBtn.addEventListener("click", () => {
  let para = document.querySelector("p");
  para.innerHTML =
    "SUMI.T. is a visually engaging portfolio website built with ReactJS and styled with Tailwind CSS. It incorporates subtle yet impactful animations using Framer Motion to create a dynamic user experience.";
});

// Task 10 : Add a mouseover event listener to an element that changes its border color.
projectBtn.addEventListener("mouseover", () => {
  projectBtn.style.borderColor = "green";
});
