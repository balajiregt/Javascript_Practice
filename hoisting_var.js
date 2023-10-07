console.log(myVar); // Output: undefined
console.log(myFunc); // Output: [Function: myFunc]

var myVar = "Hello, World!";
function myFunc() {
    return "I'm a function!";
}

console.log(myVar); // Output: "Hello, World!"
/**
 * 1. Code before execution:

console.log(myVar);
console.log(myFunc);
var myVar = "Hello, World!";
function myFunc() {
    return "I'm a function!";
}
console.log(myVar);

2. After hoisting:

var myVar;
function myFunc() {
    return "I'm a function!";
}
console.log(myVar);
console.log(myFunc);
myVar = "Hello, World!";
console.log(myVar);

 */
