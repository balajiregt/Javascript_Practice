//This code runs for both arrays and strings. Hence, Polymorphism is implemented

const concatData = (x,y) => {
    return y.concat(x);
}
console.log(concatData([1,2],[3,4]));
console.log(concatData("John","Smith"));





/* Overloading (ad-hoc polymorphism)
Overloading in JavaScript is achieved using ad-hoc Polymorphism. Functions created using ad-hoc polymorphism exhibit different behaviors based on different types of input values. For example:

+ when used on integers and floats, exhibit the property of addition.
+ when used with strings and array does concatenation.
*/
console.log(4 + 5)
console.log("My name is: "+"John Smith")

//9 & My name is John Smith.





//Structural Subtyping (Structural Polymorphism)
//Consider Person and Student.

const Person2 = {
    legs: 2,
    arms: 2,
}
const Student2 = {
    uniform: true,
}

/* Clearly, Student is a sub-type of Person, and Person is a super-type of Student. 
All the operations that can be performed on the Person can also be applied to the Student, but the reverse is not valid. 
Structural subtyping is about defining relationships. 
A sub-type will always have all the properties of another type, plus some additional features.
*/




//Subtype Polymorphism


class Person {
    speak() {
        console.log("Hello, I am a person");
    }
}

class Student extends Person {
    speak() {
        console.log("Hello, I am a student");
    }
}

let person = new Student();
person.speak();  // Outputs: Hello, I am a student

/*This code will work in a JavaScript environment. 
The Student class extends the Person class, so an instance of Student can be assigned to a variable that's expected to hold a Person object. 
When the speak() method is called on that variable, it will call the speak() method of the Student class, thanks to polymorphism.
*/

/*Understanding with an Example:
Consider a real-world analogy where Person is a generic type representing any human being, and Student represents a person who is specifically a student. 
In this analogy, every student is a person, but not every person is a student. 

You're essentially saying, "I have a person who is specifically a student." 
In programming, this allows you to use the person variable to call any methods defined in the Person class, and because the actual object is a Student, it will use the methods as overridden or extended in the Student class if applicable.
*/