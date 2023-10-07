//function declaration
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Outputs: "Hello, Alice!"


//function expression
const greet = function(name) {
    return "Hello, " + name + "!";
};
console.log(greet("Bob")); // Outputs: "Hello, Bob!"

//arrow functions
const greet = (name,age) => "Hello, " + name + "!";
console.log(greet("Charlie",'15')); // Outputs: "Hello, Charlie!"

//IIFE
(function(name) {
    console.log("Hello, " + name + "!");
})("David");  // Outputs: "Hello, David!"


//constructor functions
function Person(name) {
    this.name = name;
    this.greet = function() {
        console.log("Hello, " + this.name + "!");
    };
}

const alice = new Person("Alice");
alice.greet();  // Outputs: "Hello, Alice!"


//async await functions
async function fetchData(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}
