//reverse a string- method1
function reverseString(str) {

    return str.split("").reverse().join("");
    
}
let resultstring=reverseString("hello");



//reverse a string- method2
function reverseString2(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o","w","o","r","l","d"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o","w","o","r","l","d"].reverse();
    // ["d","l","r","o","w","o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["d","l","r","o","w","o", "l", "l", "e", "h"].join("");
    // "dlrow olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "dlrow olleh"
}
let resultstring2 =reverseString2("hello world");




//reverse a string word [ie hello world to world hello]
function reverseString3(str) {

    return str.split(" ").reverse().join(" ");
    
}
let resultstring3=reverseString3("hello world");


console.log(resultstring)
console.log(resultstring2)
console.log(resultstring3)


let number = 12354987,
output = []
let sNumber = number.toString();
let len = sNumber.length

for (var i = 0, ; i < len; i++) {
    output.push(+sNumber.charAt(i));
}


console.log(output);

let sum = 0
for (var i = 0, ; i < output.length; i++ );
{
sum = sum + output[i]
console.log(sum);
}
