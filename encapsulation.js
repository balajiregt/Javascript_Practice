/*
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
console.log(`Mileage: ${car.getMileage()} miles.`);*/
function messageFunc(){
    const message= "Hey there!"
    console.log("Message from  inside: ",message);
}

// Calling the function which internally defines the message
messageFunc(); 

// Trying to access message from outside the function which defines it
console.log("Message from  outside: ",message);
