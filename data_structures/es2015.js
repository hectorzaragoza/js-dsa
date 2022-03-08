// ES2015 Class Syntax
// class keyword was introduced. use new keyword and constructor keyword to build.

// A class is a blueprint for creating objects with pre-defined properties and methods

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
}

/* 
The method to create new objects must be called constructor. This constructor is what is used when instantiating 
a new instance of Student.

The class keyword creates a constant, so you can not redefine it. 
*/

let firstStudent = new Student("Hector", "Zaragoza")

console.log(firstStudent)
console.log(firstStudent.lastName)
console.log(firstStudent.firstName)

// Class instance returns a JS object, key-value pair

// Instance Methods
// Provides funcitonality that applies to a particular instance of a class.
// like push() on an instance of an array
console.log(firstStudent.fullName())

// Class Methods
// Using the static keyword...Methods that are pertinent to classes but not necessarily for particular instances
// They are called without instantiating their class and cannot be called through a class instance. Static
// methods are often used to create utility functions for an application

// We will be using the constructor and instance methods, for the most part.
// 'this' keyword. Inside all of our instance methods and constructor, the keyword 'this' refers to the object
// created from that class(also known as an instance)

// RECAP
// Classes are blueprints that when created make objects known as instances
// Classes are created with the new keyword 
// The constructor function is a special function that gets run when the class is instantiated
// Instance methods can be added to classes similar to methods in objects
// Class methods can be added using the static keyword