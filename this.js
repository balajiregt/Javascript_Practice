function getName() {
    return this.name;
  }

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

person1.getName = getName;
person2.getName = getName;

console.log(person1.getName());  // Outputs: Alice
console.log(person2.getName());  // Outputs: Bob
