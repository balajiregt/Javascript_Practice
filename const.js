const PI = 3.14159;
console.log(PI)

function constExam(){
    const PI2 = 3.14159;
}
constExam()
console.log(PI2)

const obj = {
    key: "value"
};


//const SOME_VALUE; // Error: Missing initializer in const declaration

const A = 1;
A = 2; // Error: Assignment to constant variable.


const obj2 = {
    key: "value"
};

obj2.key = "new value"; // This is valid

const arr = [1, 2, 3];
arr.push(4)
console.log(arr); // This is valid too
