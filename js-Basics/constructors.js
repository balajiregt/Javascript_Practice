//constructor function
function Person(){
this.name='john',
this.age=30

}

//creating the object using 'new' keyword
const student1=new Person()
console.log(student1)
console.log(student1.name)

const student2=new Person()
student2.gender='male'
console.log(student2.gender)

const student3=new Person()
student3.sports=function () {
this.sportsname='longjump',
this.level='senior'
}

student3.name='George'
console.log(student3)
console.log(student3.sports)

console.log(student2.sports)

Person.prototype.class='High school'
console.log(Person)
console.log(student1.class)
console.log(student2.class)
console.log(student3.class)



