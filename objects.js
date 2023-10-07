//object literal
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
};


//constructor function- new keyword
function Car2(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car2 = new Car2('Toyota', 'Corolla', 2020);
