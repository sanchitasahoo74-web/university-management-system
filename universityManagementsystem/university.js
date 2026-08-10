const Student = require('./students.js');
class University{
    constructor(name){
        this.name = name;
        this.students = [];
    }
    addStudent(student){
        this.students.push(student);
        console.log("Student added successfully!");
    }
    viewStudents(){
        if(this.students.length === 0){
            console.log("No students found.");
            return;
        }
        for(let student of this.students){
            console.log("----------------------------------------------------------------------");
            student.display();
        }
    }
    searchStudent(roll){
        const student=this.students.find(s=>s.roll===roll);
        if(!student){
            console.log("Student not Found.");
            return;
        }
        student.display();
    }
    deleteStudent(roll){
        const index=this.students.findIndex(s=>s.roll===roll);
        if(index===-1){
            console.log("Student not Found.");
            return;
        }
        this.students.splice(index,1);
        console.log("Student deleted successfully!");
        Student.totalStudents--;

    }
    updateStudent(roll, newDepartment){
        const student=this.students.find(s=>s.roll===roll);
        if(!student){
            console.log("Student not Found.");
            return;
        }
        student.department=newDepartment;
        console.log("Student department updated successfully!");
    }
    studentByDepartment(department){
        const list=this.students.filter(s=>s.department===department);
        if(list.length===0){
            console.log("No students found in this department.");
            return;
        }
        console.log(list);
    }
};

const u1=new University("ABC University");
const s1= new Student(1, "sanchita sahoo", 19, "Female", 101, "Computer Science");
const s2= new Student(2, "Ankita Rout", 19, "Female", 102, "Mechanical Engineering");
u1.addStudent(s1);
u1.addStudent(s2);
u1.viewStudents();
u1.searchStudent(101);
u1.updateStudent(101, "Information Technology");
u1.viewStudents();
u1.deleteStudent(102);
u1.viewStudents();
u1.studentByDepartment("Information Technology");
Student.showTotalStudents();