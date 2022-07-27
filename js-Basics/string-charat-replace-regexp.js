
/*
let text = "HELLO WORLD";
let letter = text.charAt(0);
console.log(letter)

let text2 = "HELLO world";
let letter2 = text2.search(/orl/i)
console.log(letter2)


function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.eyeColor = eye;
  }
  const myFather = new Person("John", "Doe", 50,"blue");
  const myMother = new Person("Sally", "Rally", 55,"green");
  
  Person.prototype.nationality = "English";
  console.log(Person.myFather)
  console.log(Person.myMother)
  */
  


let text1="$.5000mi"
let result1=text1.replace(/[a-z]/g,'')
result1=result1.replace('$','')
result1=result1.replace('.','')
 
let text2 = "Mr Blue has a blue house and a blue car";
let result2 = text2.replace(/blue|house|car/gi,'hello')

let text3 = "Mr. Blue has a blue house";
let position3 = text3.replace(/blue/ig, 'red'); //both 'blue' occurence has been replaced

let text3b = "Mr. Blue has a blue house";
let position3b = text3b.replace(/blue/i, 'red'); //only the first 'blue' occurence has been replaced

let text4 = "Mr Blue has a blue house and a blue car";
let result4 = text4.replace(/blue|house|car/gi, function (x) {
    return x.toUpperCase();   //return the removed lower case text 'Blue','house','car' //both 'blue' occurence has been replacedand change it to uppercase
  });


console.log(result1)
console.log(result2)
console.log(position3)
console.log(position3b)
console.log(result4)
