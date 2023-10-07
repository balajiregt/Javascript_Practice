/* let redeclareVar='hello'
let redeclareVar='world' */

let reAssignVar='hello'
reAssignVar='world'
console.log(reAssignVar)

if (true) {
    let blockScopedVar = "I am block-scoped";
    console.log(blockScopedVar);  // Outputs: "I am block-scoped"
}
console.log(blockScopedVar);  // Error: blockScopedVar is not defined

function funcBlockScopedVar(){
let myVar='I am block scoped'
console.log(myVar)
}
funcBlockScopedVar()

function funcBlockScopedVar(){
    let myVar='I am block scoped2'
    console.log(myVar)
    }
    funcBlockScopedVar()
console.log(myVar)



function functionOne() {
    let variable = "Function One's Variable";
    console.log(variable);
}

function functionTwo() {
    let variable = "Function Two's Variable";
    console.log(variable);
}

functionOne();  // Outputs: "Function One's Variable"
functionTwo();  // Outputs: "Function Two's Variable" */


for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);  // Outputs numbers 0 through 4, one at a time
    }, 100);
}


for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i);  // Outputs numbers 0 through 4, one at a time
        }, 100);
    }

let fruits = ['apple', 'banana', 'cherry'];

for (let fruit of fruits) {
    console.log(fruit);
}

let obj = {a: 1, b: 2, c: 3};

for (let key in obj) {
    console.log(key, obj[key]);
}

    
