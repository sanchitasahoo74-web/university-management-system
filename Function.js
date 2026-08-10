function namecalling1(){
    console.log("sanchita sahoo");
}

namecalling1();
namecalling1();
namecalling1();

function namecalling2(name){
    console.log(name);
}

namecalling2("sanchita sahoo");
namecalling2("Ankita Rout");
namecalling2("sumi sau");
namecalling2("sathi patra");
namecalling2("Kaberi Dandapat");

function marriageQuotes(bride,groom){
    console.log(`${bride} weds ${groom}`);
}
marriageQuotes("sunny","Trina")

function add(num1,num2){
    return num1+num2;
}

function multivalue(num1,num2,num3){
    return add(num1,num2)*num3;
}
const res=multivalue(10,20,30);
console.log(res);

// Function Expression
const response=function(x,y){
    return x+y;
}

console.log(response(10,20));


//Arrow Function

const sum1=(a,b)=>{
    return a+b;
}

//short Arrow Function
const sum2=(a,b)=>a+b;

console.log(sum1(10,20));
console.log(sum2(10,20));


function setProfilePicture(url="https://www.w3schools.com/howto/img_avatar.png"){
    console.log(`Profile Picture URL: ${url}`);
}

setProfilePicture();