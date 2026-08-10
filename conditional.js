const age=18;
if(age>=18){
    console.log("you are eleigible to vote");
}

if(age>=18){
    console.log("you are eleigible to vote.");
}else{
    console.log("you are not eligible to vote.");
}

const marks=85;
if(marks>=90){
    console.log("Grade:A");
}else if(marks>=80){
    console.log("Grade: B");
}else if(marks>=70){
    console.log("Grade:C");
}else{
    console.log("Grade:D");
}

const currentAge=25;
if(currentAge>=21){
    console.log("Eligible for Marriage.");
}else{
    console.log("Not Eligible for Marriage.");
}

const result=currentAge>=21?"Eligible for Marriage.":"Not Eligible for Marriage.";
console.log(result);

// RBAC
const userRole="admin";
switch(userRole){
    case "admin":
        console.log("Admin Dashboard");
        break;
    case "principal":
        console.log("Principal Dashboard");
        break;
    case "professor":
        console.log("Professor Dashboard");
        break;
    default:
        console.log("Student Dashboard");
}