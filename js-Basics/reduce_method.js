/* 
array.reduce(reducer [, initialValue])
The reduce() method takes two arguments: a reducer callback function and an optional initial value.

The reduce() method calls the reducer() function for every element in the array.

The reducer() function returns a value which is an accumulated result, and this result is provided as an argument in the next call to the reducer() function

The reducer() function has the following form:
function reducer(accumulator, currentValue, currentIndex, array){}

accumulator-
The value returned from the previous call of the reducer function. If you pass the initialValue to the reduce() method,  when the reducer function is executed for the first time, the accumulator equals the initialValue.

currentValue-
The value of the array element in the current iteration.

currentIndex-
The index of the array element in the current iteration.

array-
The array that the reduce() method was called upon.

The initialValue-
The initial value argument is optional. If you pass in the initialValue argument, the reduce() method will assign it to the previousValue argument of the reducer() function at the first call of the reducer function.

The reducer() function executes on each element and returns a value. This return value is assigned to the accumulator argument in each iteration. At the final iteration, the value of the accumulator become the single resulting value.
*/

let numbers = [1, 2, 3];
let sum = numbers.reduce(function (accumulator, currentValue) {
    console.log('acc: ', accumulator, 'curr:', currentValue);
    return accumulator + currentValue;
},100); //passing initial value argument
console.log(sum)


let shoppingCart = [{
    product: 'phone',
    qty: 1,
    price: 699
},
{
    product: 'Screen Protector',
    qty: 1,
    price: 9.98
},
{
    product: 'Memory Card',
    qty: 2,
    price: 20.99
}
];

let total = shoppingCart.reduce(function (acc, curr) {
    console.log('acc: ', acc, 'curr:', curr);
    return acc + curr.qty * curr.price;
},0); //passing initial value argument

console.log(total);