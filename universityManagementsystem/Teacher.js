class Teacher{
    constructor(id,name,age,gender,employeeId,department){
        this.id=id;
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.employeeId=employeeId;
        this.department=department;
        this.course=[];
    }
    display(){
        console.log(`ID:${this.id}`);
        console.log(`Name:${this.name}`);
        console.log(`Age:${this.age}`);
        console.log(`Gender:${this.gender}`);
        console.log(`EmployeeID:${this.employeeID}`);
        console.log(`Department:${this.department}`);
        console.log(`Courses:${this.courses.length}`);
        console.log("Courses assigned to this teacher:");
        this.courses.forEach (course=>{
            console.log(`- ${course.name}`);
        });
    }
    assignCourse(course){
        const existingCourse=this.courses.some(c=>c===course);
        if(existingCourse){
            console.log("Course already assigned to this teacher.");
            return false;
        }
        this.course.push(course);
        console.log("course assigned successfully!");
        return true;
    }
    removeCourse(courseID){
        const index=this.courses.findIndex(c=>c.id===courseID);
        if(index===-1){
            console.log("Course no found.");
            return false;
        }
        this.courses.splice(index,1);
        console.log("Course removed successfully!");
        return true;
    }
    viewCourses(){
        if(this.courses.legth===0){
            console.log("No courses assigned to this teacher.");
            return;
        }
        console.log("Courses assigned to this teacher:");
        this.courses.forEach(course=>{
            console.log(`=${course.name}`);
        });
    }
    
}
module.exports=Teacher;