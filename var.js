var globalVar="I am a global variable"
console.log(globalVar)

 function myFunction(){
    var funcVar="I am a function scoped variable"
    console.log(funcVar)
}
myFunction() 


function myFunction2(){
    console.log(hoistedVar)
    var hoistedVar="I have been hoisted"
    console.log(hoistedVar)
}
myFunction2()


var myVar='hello'
var myVar="world"
console.log(myVar)

var myVar2='hello'
console.log(myVar2)
myVar2="world"
console.log(myVar2)

var userData = fetchUserData();

// ... many lines of code later ...
function fetchUserData(){
    console.log('Initial userdata')
}
var userData = "Test Data";  // The original userData is overwritten unintentionally
console.log(userData)