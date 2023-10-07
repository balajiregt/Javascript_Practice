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