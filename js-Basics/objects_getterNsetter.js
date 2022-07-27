//OBjects > key value pairs/properties of the object can represented here
let person ={
    name: 'Balaji',
    age: 30,
    marks: {
        science: 70,
        math: 75
    },
    greet: function() { 
        console.log('hello') 
    },

    get getName(){
     return this.age
    }
};
person.name='Arthi' //dot notation for accessing properties
person['age']=25 //bracket notation for accessing properties
console.log(person.name);//Square brackets also provide a way to obtain the property name, in realtime.But the dot notation doestnot

console.log(person.age);//Square brackets also provide a way to obtain the property name, in realtime.But the dot notation doestnot
console.log(person.marks.science)//Square brackets also provide a way to obtain the property name, in realtime.But the dot notation doestnot
console.log(person.greet()) //accessing the data property [here 'object- greet']
console.log(person.getName)//accessing getter method



let user = {
    name: "John",
    age: 30
  };

  let key = prompt("What do you want to know about the user?", "name");
  alert( user.key ); 

  export {person}