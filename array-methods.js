let fruits = ['Apple', 'Banana'];
fruits.push('Mango'); // Returns 3


let fruits2 = ['Apple', 'Banana', 'Mango'];
let last = fruits2.pop(); // Returns 'Mango'


let fruits3 = ['Apple', 'Banana', 'Mango'];
let first = fruits3.shift(); // Returns 'Apple'


let fruits4 = ['Banana', 'Mango'];
fruits4.unshift('Apple'); // Returns 3


let fruits5 = ['Apple', 'Banana', 'Mango', 'Orange', 'Lemon'];
let citrus = fruits5.slice(3, 5); // Returns ['Orange', 'Lemon']


let fruits6 = ['Apple', 'Banana', 'Mango', 'Orange'];
fruits6.splice(2, 1, 'Lemon'); // Removes 'Mango' and adds 'Lemon' at the same position

let numbers = [1, 4, 9];
let roots = numbers.map(Math.sqrt); // Returns [1, 2, 3]

//
let numbers2 = [1, 2, 3, 4];
let evens = numbers2.filter(n => n % 2 === 0); // Returns [2, 4]

let numbers3 = [1, 2, 3, 4];
let sum = numbers3.reduce((total, value) => total + value, 0); // Returns 10

