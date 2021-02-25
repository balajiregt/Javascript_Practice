var greeting = function(){ 
    return "Hello Worlds"; 
}
 // Check the type of greeting variable
alert(typeof greeting) // Output: function
alert(greeting()); 




function createGreeting(name){
    return "Hello, " + name;
}
function displayGreeting(greetingFunction, userName){
    return greetingFunction(userName);
}
var result = displayGreeting(createGreeting, "Peter"); //Functions can be stored in variables, objects, and arrays & Functions can be passed as arguments to other functions, and functions can be returned from functions
alert(result); // Output: Hello, Peter


var colors = ["Red", "Yellow", "Green", "Orange"];
var cities = ["London", "Paris", "New York"];
alert(colors[0]);   // Output: Red
alert(cities[2]);   // Output: New York