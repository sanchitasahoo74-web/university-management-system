// API Layer for University Management System


const Student = require("./students.js");
const Teacher = require("./teacher.js");
const Course = require("./course.js");
const University = require("./university.js");


// ==========================================
// UNIVERSITY
// ==========================================

const university =
    new University(
        "Stanford University"
    );


// ==========================================
// STUDENTS
// ==========================================

const student1 =
    new Student(
        1,
        "Ramesh Das",
        22,
        "Male",
        101,
        "Computer Science"
    );

const student2 =
    new Student(
        2,
        "Suresh Kumar",
        23,
        "Male",
        102,
        "Mechanical Engineering"
    );

const student3 =
    new Student(
        3,
        "Rahul Sharma",
        21,
        "Male",
        103,
        "Computer Science"
    );

const student4 =
    new Student(
        4,
        "Priya Singh",
        20,
        "Female",
        104,
        "Electronics"
    );


// ==========================================
// ADD STUDENTS
// ==========================================

university.addStudent(student1);
university.addStudent(student2);
university.addStudent(student3);
university.addStudent(student4);


// ==========================================
// TEACHERS
// ==========================================

const teacher1 =
    new Teacher(
        1,
        "Amit Kumar",
        35,
        "Male",
        "T001",
        "Computer Science"
    );

const teacher2 =
    new Teacher(
        2,
        "Neha Sharma",
        32,
        "Female",
        "T002",
        "Electronics"
    );


// ==========================================
// ADD TEACHERS
// ==========================================

university.addTeacher(teacher1);
university.addTeacher(teacher2);


// ==========================================
// COURSES
// ==========================================

const course1 =
    new Course(
        "CS101",
        "JavaScript Programming",
        4,
        3
    );

const course2 =
    new Course(
        "CS102",
        "Data Structures",
        4,
        2
    );

const course3 =
    new Course(
        "EC101",
        "Digital Electronics",
        3,
        3
    );


// ==========================================
// ADD COURSES
// ==========================================

university.addCourse(course1);
university.addCourse(course2);
university.addCourse(course3);


// ==========================================
// ASSIGN TEACHERS
// ==========================================

university.assignTeacherToCourse(
    "T001",
    "CS101"
);

university.assignTeacherToCourse(
    "T001",
    "CS102"
);

university.assignTeacherToCourse(
    "T002",
    "EC101"
);


// ==========================================
// ENROLL STUDENTS
// ==========================================

university.enrollStudent(
    101,
    "CS101"
);

university.enrollStudent(
    102,
    "CS101"
);

university.enrollStudent(
    103,
    "CS101"
);


university.enrollStudent(
    101,
    "CS102"
);

university.enrollStudent(
    103,
    "CS102"
);


university.enrollStudent(
    104,
    "EC101"
);


// ==========================================
// DISPLAY STUDENTS
// ==========================================

console.log(
    "\n\n===== ALL STUDENTS ====="
);

university.viewStudents();


// ==========================================
// DISPLAY TEACHERS
// ==========================================

console.log(
    "\n\n===== ALL TEACHERS ====="
);

university.viewTeachers();


// ==========================================
// DISPLAY COURSES
// ==========================================

console.log(
    "\n\n===== ALL COURSES ====="
);

university.viewCourses();


// ==========================================
// SEARCH STUDENT
// ==========================================

console.log(
    "\n\n===== SEARCH STUDENT ====="
);

university.searchStudent(101);


// ==========================================
// SEARCH TEACHER
// ==========================================

console.log(
    "\n\n===== SEARCH TEACHER ====="
);

university.searchTeacher("T001");


// ==========================================
// SEARCH COURSE
// ==========================================

console.log(
    "\n\n===== SEARCH COURSE ====="
);

university.searchCourse("CS101");


// ==========================================
// STUDENTS BY DEPARTMENT
// ==========================================

console.log(
    "\n\n===== COMPUTER SCIENCE STUDENTS ====="
);

university.studentsByDepartment(
    "Computer Science"
);


// ==========================================
// COURSE STUDENTS
// ==========================================

console.log(
    "\n\n===== CS101 STUDENTS ====="
);

course1.viewEnrolledStudents();


// ==========================================
// TEACHER COURSES
// ==========================================

console.log(
    "\n\n===== T001 COURSES ====="
);

teacher1.viewCourses();


// ==========================================
// AVAILABLE SEATS
// ==========================================

console.log(
    "\nAvailable seats in CS101:",
    course1.getAvailableSeats()
);


// ==========================================
// TOTAL STUDENTS
// ==========================================

console.log(
    "\n\n===== STUDENT COUNT ====="
);

Student.showTotalStudents();


// ==========================================
// UPDATE STUDENT
// ==========================================

console.log(
    "\n\n===== UPDATE STUDENT ====="
);

university.updateStudent(
    101,
    "Ramesh Das Updated",
    23,
    "Computer Science"
);

university.searchStudent(101);


// ==========================================
// REMOVE STUDENT FROM COURSE
// ==========================================

console.log(
    "\n\n===== REMOVE FROM COURSE ====="
);

university.removeStudentFromCourse(
    101,
    "CS101"
);

course1.viewEnrolledStudents();


// ==========================================
// DELETE STUDENT
// ==========================================

console.log(
    "\n\n===== DELETE STUDENT ====="
);

university.deleteStudent(104);


// ==========================================
// FINAL STUDENT COUNT
// ==========================================

Student.showTotalStudents();