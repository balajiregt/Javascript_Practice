const greet = () => "Hello, World!";
console.log(greet());  // Outputs: "Hello, World!"

const square = x => x * x;
console.log(square(5));  // Outputs: 25
const square2 = (x) => x * x;
console.log(square(5))

const add = (a, b) => a + b;
console.log(add(3, 4));  // Outputs: 7


const fetchData = (url) => {
    // Mock fetching data
    console.log(`Fetching data from ${url}...`);
    return "Data fetched!";
};


const double = n => n * 2;
console.log(double(5));  // Outputs: 10
