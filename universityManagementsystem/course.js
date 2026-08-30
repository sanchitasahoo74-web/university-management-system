const Teacher = require("./teacher");
class Course {
  constructor(courseId, name, credits, capacity) {
    this.courseId = courseId;
    this.name = name;
    this.credits = credits;
    this.capacity = capacity;
    this.teacher = null;
    this.students = [];
  }
  display() {
    console.log(`Course ID: ${this.courseId}`);
    console.log(`Name: ${this.name}`);
    console.log(`Credits: ${this.credits}`);
    console.log(`Capacity: ${this.capacity}`);
    console.log(
      `Teacher: ${this.teacher ? this.teacher.name : "Not assigned"}`,
    );
    console.log(`Students enrolled: ${this.students.length}`);
    console.log(`Vacant Seats: ${this.getAvailableSeats()}`);
  }
  assignTeacher(teacher) {
    if (this.teacher) {
      console.log(
        `Course already has a teacher assigned: ${this.teacher.name}`,
      );
      return false;
    }
    this.teacher = teacher;
    const assigned = teacher.assignCourse(this);
    if (!assigned) {
      this.teacher = null;
      return false;
    }
    console.log(`Teacher ${teacher.name} assigned to course ${this.name}`);
    return true;
  }
  removeTeacher() {
    if (!this.teacher) {
      console.log("No teacher assigned to this course.");
      return false;
    }
    const teacher = this.teacher;
    teacher.removeCourse(this.courseId);
    this.teacher = null;
    console.log(`Teacher ${teacher.name} removed from course ${this.name}`);
    return true;
  }
  enrollStudent(student){
    if(this.students.length>=this.capacity){
        console.log("Course is full. Cannot enroll more students.");
        return false;
    }
    const existingStudent=this.students.some(s=>s===student);
    if(existingStudent){
        console.log("Student already enrolled in this course.");
        return false;
    }
    this.students.push(student);
    console.log(`Student enrolled in course ${this.name}`);
    return true;
  }
  removeStudent(roll){
    const index=this.students.findIndex(s=>s.roll===roll);
    if(index===-1){
        console.log("Student not found in this course.");
        return false;
    }
    this.students.splice(index,1);
    console.log(`Student removed from course ${this.name}`);
    return true;
  }
  viewEnrolledStudents(){
    if(this.students.length===0){
        console.log("No students enrolled in this course.");
        return;
    }
    console.log(`Enrolled students in course ${this.name}:`);
    this.students.forEach(student=>{
        console.log(`Roll: ${student.roll}, Name: ${student.name}`);
    });
  }

  getAvailableSeats() {
    return this.capacity - this.students.length;
  }
}


module.exports = Course;