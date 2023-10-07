//Creating an object
const student = {
    first_name: 'Mary',
    last_name: 'Green',
    display_full_name: function(){
        return `${student.first_name} ${student.last_name}`
    }
}

//Creating an instance for the student object
const student1 = Object.create(student);

//Updating the last name
student1.last_name = "Smith";

console.log(student1.display_full_name());

//before es6
//Creating a constructor function
function student(first_name, last_name){
    this.first_name = first_name,
    this.last_name = last_name,
    this.display_full_name = function(){
            return `${first_name} ${last_name}`;
        }
}

//Creating instances for the constructor function
const student1 = new student("Mary", "Green");
const student2 = new student("Lary", "Smith");

console.log(student2.display_full_name());
