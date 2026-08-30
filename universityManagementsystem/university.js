const Student = require('./students.js');
const Teacher = require('./teacher.js');
const Course = require('./course.js');
class University{
    constructor(name){
        this.name = name;
        this.students = [];
        this.teachers = [];
        this.courses=[];
    }

    // Student Management
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
    // We have to Update this function later based on {roll, newName, newAge, NewGender, newDepartment}
    updateStudent(roll, newDepartment){
        const student=this.students.find(s=>s.roll===roll);
        if(!student){
            console.log("Student not Found.");
            return;
        }
        student.department=newDepartment;
        console.log("Student department updated successfully!");
    }
    studentsByDepartment(department){
        const list=this.students.filter(s=>s.department===department);
        if(list.length===0){
            console.log("No students found in this department.");
            return;
        }
        console.log(list);
    }



    // Teacher Management

    addTeacher(teacher){
        const exists = this.teachers.some(t=> t.employeeId===teacher.employeeId);
        if(exists){
            console.log("Teacher with this employee ID already exists.");
            return false;
        }
        this.teachers.push(teacher);
        console.log("Teacher added successfully!");
        return true;
    }
    viewTeachers(){
        if(this.teachers.length===0){
            console.log("No teachers found.");
            return;
        }
        this.teachers.forEach(teacher=>{
            teacher.display();
        })
    }

    findTeacher(employeeId){
        return this.teachers.find(t=>t.employeeId===employeeId);
    }
    searchTeacher(employeeId){
        const teacher=this.findTeacher(employeeId);
        if(!teacher){
            console.log("Teacher not found.");
            return null;
        }
        teacher.display();
        return teacher;
    }
    
    deleteTeacher(employeeId){
        const index = this.teachers.findIndex(teacher=> teacher.employeeId===employeeId);
        if(index===-1){
            console.log("Teacher not found");
            return false;
        }
        const teacher = this.teachers[index];
        if(teacher.courses.length>0){
            console.log("Cannot delete teacher bcz Courses are assigned.")
            return false;
        }

        this.teachers.splice(index,1);
        console.log(`${teacher.name} deleted Successfully`);
    }



    // Course Management

    addCourse(course){
        const exist = this.courses.some(c=>c.code === course.code);
        if(exist){
            console.log("Course already Exists");
            return false;
        }
        this.courses.push(course);
        console.log(`${course.name} added Successfully`);
        return true;
    }


    viewCourses(){
        if(this.courses.length===0){
            console.log("No Courses Found.")
            return;
        }
        console.log("\n==========COURSES===========\n");
        this.courses.forEach(course=> {
            course.display();
        });
    }


    findCourse(code){
        return this.courses.find(course=> course.code === code);
    }
    searchCourse(code){
        const course = this.findCourse(code);
        if(!course){
            console.log("Course not found.");
            return null;
        }
        course.display();
        return course;
    }


    deleteCourse(code){
        const index = this.courses.findIndex(course => course.code === code);
        if(index===-1){
            console.log("Course not Found.");
            return false;
        }
        const course = this.courses[index];
        if(course.student.length>0){
            console.log("Cannot delete course because students are enrolled.");
            return false;
        }
        course.removeTeacher();
        this.courses.splice(index,1);
        console.log(`${course.name} deleted succesfully.`);
        return true;
    }   


    // Course Operations


    assignTeacherToCourse(employeeId,courseCode){
        const teacher = this.findTeacher(employeeId);
        if(!teacher){
            console.log("teacher not Found");
            return false;
        }
        const course = this.findCourse(courseCode);
        if(!course){
            console.log("Course not Found");
            return false;
        }
        return course.assignTeacher(teacher);
    }


    enrollStudent(roll,courseCode){
        const student = this.students.find(s=> s.roll ===roll);
        if(!student){
            console.log("Student not Found");
            return false;
        }
        const course = this.findCourse(courseCode);
        if(!course){
            console.log("Course not Found");
            return false;
        }
        return course.enrollStudent(student);
    }



    removeStudentFromCourse(roll,courseCode){
        const course = this.findCourse(courseCode);
        if(!course){
            console.log("Course not Found");
            return false;
        }
        return course.removeStudent(roll);
    }
};

module.exports = University;