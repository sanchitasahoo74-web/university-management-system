//object
const student={
    name:"sanchita",
    age:19,
    greet(){
        console.log(`Hello,my name is ${this.name} and I am ${this.age}years old.`);
    }
}

console.log(student.name);
console.log(student.age);
student.greet();

//