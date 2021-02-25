//OBjects > key value pairs/properties of the object can represented here
let person ={
    name: 'Balaji',
    age: 30,
};
person.name='Arthi' //dot notation for accessing properties
person['age']=25 //bracket notation for accessing properties
console.log(person.name);
console.log(person.age);

//Square brackets also provide a way to obtain the property name, in realtime.But the dot notation doestnot


let user = {
    name: "John",
    age: 30
  };

  let key = prompt("What do you want to know about the user?", "name");
  alert( user.key ); 
