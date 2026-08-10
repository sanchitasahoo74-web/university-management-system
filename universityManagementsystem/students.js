const Person = require("./person.js");
class Student extends Person {
    static totalStudents=0;
    constructor(id, name, age, gender,roll, department){
        super(id, name, age, gender);
        this.roll=roll;
        this.department=department;
        this.marks=[];
        Student.totalStudents++;
    }
    display(){
        super.display();
        console.log(`Roll: ${this.roll}`);
        console.log(`Department: ${this.department}`);
    }
    static showTotalStudents(){
        console.log(`Total Students: ${Student.totalStudents}`);
    }
    get studentName(){
        return this.name;
    }
    set studentName(newName){
        if(newName.length <3){
            console.log("Name should be at least 3 characters long.");
            return;
        }
        this.name=newName;
    }
}

module.exports=Student;