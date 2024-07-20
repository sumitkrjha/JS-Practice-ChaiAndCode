// Activity 1 : Object Creation and Access
// Task 1 : Create an object, books, with properties like title, author and year, and log the object to the console

let books = {
  title: "Buddha and his dhamma",
  author: "Dr. Ambedkar",
  date: 1957,
};

console.log(books);

// Task 2 : Access and log the title and author properties of the book object
console.log(books.title, books.author);

// Activity 2 : Object Methods
// Task 3 : Add a method to the object book that returns a string with the book's title and author, log the result of calling this method
books = {
  title: "Buddha and his dhamma",
  author: "Dr. Ambedkar",
  date: 1957,
  desc: function () {
    return `${this.title} is written by ${this.author}`;
  },
};

console.log(books.desc());

// Task 4 : Add a method to the object book that takes an argument (year) and updatest the book's year property, then log the updated object
books = {
  title: "Buddha and his dhamma",
  author: "Dr. Ambedkar",
  date: 1957,
  desc: function () {
    return `${this.title} is written by ${this.author}`;
  },
  saal: function (year) {
    this.date = year;
  },
};

books.saal(2000);
console.log(books);

// Activity 3 : Nested Object
// Task 5 : Create a nested object representing a library with properties like name and books(an array of book objects), and log the library object to the console.

let library = {
  naam: "Readers",
  books: [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
    },
    {
      title: "Buddha and his dhamma",
      author: "Dr. Ambedkar",
    },
    {
      title: "Breaking India",
      author: "Rajiv Malhotra",
    },
  ],
};
console.log(library);

// Task 6 : Access and log the name of the library and titles of all the books in the library
console.log("Library ka naam = ", library.naam);
library.books.forEach((book) => {
  console.log("Book Title :", book.title);
});

// Activity 4 : The "this" keyword
// Task 7 : Add a method to the book object that uses this keyword to return a string with the book's title and year, and log the result of calling this method

books = {
  title: "Buddha and his dhamma",
  author: "Dr. Ambedkar",
  date: 1957,
  desc: function () {
    return `${this.title} is written by ${this.author}`;
  },
  saal: function (year) {
    this.date = year;
  },
  fnc: function () {
    return `The book title is ${this.title} and year is ${this.date}`;
  },
};

console.log(books.fnc());

// Activity 5 : Object Iteration
// Task 8 : Use a for..in loop to iterate over the properties of the book object and log each property and its value.

for (const property in books) {
  console.log(`${property}: ${books[property]}`);
}

// Task 9 : Use object.keys and object.values methods to log all the keys and values of the book object.

console.log("Keys:", Object.keys(books));
console.log("Values:", Object.values(books));
