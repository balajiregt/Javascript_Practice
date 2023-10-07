//primitives
let personname = "John";  //string
console.log(personname)

let age = 30;         // an integer
let price = 9.99;     // a floating-point number
console.log(age,price)

let bigIntValue = 1234567890123456789012345678901234567890n; //bigint
console.log(bigIntValue)

let isOnline = true; //boolean
console.log(true)

//Represents a variable that has been declared but hasn't been assigned a value yet.
let x;
console.log(x); // Outputs: undefined


let emptyValue = null; //Represents a non-value or no value.

//Non-Primitive (or Reference) Data Types:

//object-Represents a collection of properties
let person = {
    firstName: "Alice",
    lastName: "Doe"
  };
console.log(person)  

//array-Represents a list-like collection of values
let fruits = ["apple", "orange", "banana"];


//function-Represents a set of statements that can be called to perform an action.
function greet() {
    console.log("Hello, World!");
  }
greet()
  
