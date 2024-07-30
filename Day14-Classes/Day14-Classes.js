// Activity 1 : Class Definition
// Task 1 : Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
  name = "Sumit";
  age = 23;
  greeting() {
    console.log(`Hi ${this.name}!`);
  }
}

const newPerson = new Person();
newPerson.greeting();

// Task 2 : Add a method to the Person class that updates the age property and log the updated age.
class Person {
  name = "Sumit";
  age = 23;
  greeting() {
    console.log(`Hi ${this.name}!`);
  }
  newAge(age) {
    this.age = age;
    console.log(`New age of ${this.name} is ${this.age}`);
  }
}

const newPerson = new Person();
newPerson.newAge(29);

// Activity 2 : Class Inheritance
// Task 3 : Define a class Student that extends Person class. Add a property studentId and a method to return the studentId. Create an instance of the Student class and log the student Id.

class Student extends Person {
  studentId = 12;
  IdStudent() {
    console.log(`The student ${this.name} has Id : ${this.studentId}`);
  }
}

const newStudent = new Student();
newStudent.IdStudent();

//Task 4 : Override the greeting message in the Student class to include the StudentID in the message. Log the overridden greeting message.

class Student extends Person {
  studentId = 12;
  IdStudent() {
    console.log(`The student ${this.name} has Id : ${this.studentId}`);
  }
  greeting() {
    console.log(
      `Hi ${this.name}! Your Student Id is : ${this.studentId}. Have a nice day.`
    );
  }
}

const newStudent = new Student();
newStudent.greeting();

// Activity 3 : Static Methods and Properties
// Task 5 : Add a static method to the Person class that returns a generic message. Call this static method without creating an instance of the Person class and log the message.

class Person {
  name = "Sumit";
  age = 23;
  static genericMessage() {
    console.log(`A generic message for ${this.name}`);
  }
  greeting() {
    console.log(`Hi ${this.name}!`);
  }
  newAge(age) {
    this.age = age;
    console.log(`New age of ${this.name} is ${this.age}`);
  }
}
// Person.genericMessage();

// Task 6 : Add a static property to the Student Class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class Student extends Person {
  studentId = 12;
  static noOfStudents = 0;
  constructor() {
    super();
    Student.noOfStudents++;
  }
  IdStudent() {
    console.log(`The student ${this.name} has Id : ${this.studentId}`);
  }
  greeting() {
    console.log(
      `Hi ${this.name}! Your Student Id is : ${this.studentId}. Have a nice day.`
    );
  }
}

const studentOne = new Student();
const studentTwo = new Student();
const studentThree = new Student();
console.log(Student.noOfStudents);

// Activity 4 : Getters and Setters
// Task 7 : Add a getter method to the Person class to return full name (assume a firstname and lastname property). Create an instance and log the full name using the getter method.
class Person {
  firstname = "Sumit";
  lastname = "Kumar Jha";
  age = 23;
  get fullname() {
    return this.firstname + " " + this.lastname;
  }
  static genericMessage() {
    console.log(`A generic message for ${this.name}`);
  }
  greeting() {
    console.log(`Hi ${this.name}!`);
  }
  newAge(age) {
    this.age = age;
    console.log(`New age of ${this.name} is ${this.age}`);
  }
}

const newPerson = new Person();
console.log(newPerson.fullname);

// Task 8 : Add a setter method to the Person class to update the name properties (firstname and lastname). Update the name using the setter and log the updated full name
class Person {
  firstname = "Sumit";
  lastname = "Kumar Jha";
  age = 23;
  get fullname() {
    return this.firstname + " " + this.lastname;
  }
  set updateNames(name) {
    const [first, last] = name.split(" ");
    this.firstname = first;
    this.lastname = last;
  }
  static genericMessage() {
    console.log(`A generic message for ${this.name}`);
  }
  greeting() {
    console.log(`Hi ${this.name}!`);
  }
  newAge(age) {
    this.age = age;
    console.log(`New age of ${this.name} is ${this.age}`);
  }
}

const newPerson = new Person();
newPerson.updateNames = "Hitesh Choudhary";
console.log(newPerson.fullname);
