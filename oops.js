//class and inheritance
class Plant {
    constructor(name) {
        this.name = name;
    }

    grow() {
        console.log(this.name + ' is growing.');
    }
}

class Flower extends Plant {
    bloom() {
        console.log(this.name + ' is blooming.');
    }
}

const rose = new Flower('Rose');
rose.grow();  // Output: Rose is growing.
rose.bloom(); // Output: Rose is blooming.

//encapsulation
function Car(make, model) {
    this.make = make; // public property
    this.model = model; // public property
    let mileage = 0; // private property

    this.drive = function(distance) {
        mileage += distance; // private property is accessible inside the function
        console.log(`${this.make} ${this.model} drove ${distance} miles.`);
    };

    this.getMileage = function() {
        return mileage; // accessing private property
    };
}

const car = new Car('Toyota', 'Corolla');
car.drive(50);
console.log(`Mileage: ${car.getMileage()} miles.`);


//polymorphism
class Animal {
    makeSound() {
        console.log('Some generic animal sound');
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('Woof, woof!');
    }
}

class Cat extends Animal {
    makeSound() {
        console.log('Meow!');
    }
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

animal.makeSound(); // Output: Some generic animal sound
dog.makeSound();    // Output: Woof, woof!
cat.makeSound();    // Output: Meow!
