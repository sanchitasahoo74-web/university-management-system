// Object
const student = {
    name:"Sanchita",
    age:19,
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

console.log(student.name); // Output: Sanchita
console.log(student.age); // Output: 19
student.greet(); // Output: Hello, my name is Ramesh and I am 22 years old.

// This is Blueprint to create same like Object;
class Student{
    // We we call any class for create object constructor called by default and it init. Object Immidietly
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Object Creation using Class
const s1= new Student("Sumi",19); // Object Property
const s2= new Student("Sangita",19);
const s3= new Student("Sankar",19);
s1.greet();
s2.greet();
s3.greet();
console.log(s1);
console.log(s2);
console.log(s3);


// Encapsulation: Hiding the data from outside world and only allow to access through functions.
// It keep data and methods together

class BankAccount{

    #balance=0;
    deposite(amount){
        this.#balance = this.#balance + amount;
    }
    getBalance(){
        return this.#balance;
    }
}

const ZihadisBankAccount = new BankAccount();
ZihadisBankAccount.deposite(1000);
console.log(ZihadisBankAccount.getBalance());



class DebitCard{
    constructor(cardNumber,expiryDate,name,cvv){
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.name = name;
        this.cvv = cvv;
    }
    #password="0000";
    #balance=0;
    setNewPassword(newPassword){
        this.#password = newPassword;
    }
    getBalance(password){
        if(password === this.#password){
            return this.#balance;
        }else{
            return "Invalid Password";
        }
    }
    deposite(amount){
        this.#balance = this.#balance + amount;
    }
}

const myDebitCard = new DebitCard("1234-5678-9012-3456","12/25","Ramesh Das","123");
const userName="Ramesh Das";
if(myDebitCard.name === userName){
    //=> User is valid
    myDebitCard.setNewPassword("1234");
    myDebitCard.deposite(5000);
    console.log(myDebitCard.getBalance("1234"));
}
myDebitCard.deposite(2000);

//Abstraction: Hidig the Implementation

// class ATM{
//     #password;
//     constructor(cardNumber,expiryDate,name,cvv){
//         this.cardNumber = cardNumber;
//         this.expiryDate = expiryDate;
//         this.name = name;
//         this.cvv = cvv;
//         // Some Login for Display the ATM Screen
//         #password=bankAccount.getUserPassword(username);
//         this.#withdrawing();
//     }
//     getUserPassword(password){
//         return password;
//     }
//     #withdrawing(){
//         // Here Widrawal Logic
//         // I got Password and All public Detail Now I can Process Withdrawal
//         console.log("Withdrawing money...");
//     }
// }

// const withdrawal = new ATM("1234-5678-9012-3456","12/25","Ramesh Das","123");


{
    // App v1.0
    // Auth Class1{// Some auth code}
    // Email Login and Number Login
}

{
    //App v2.0
    // some auth code
    //Auth Class2{// Some auth code}
    //External Auth Class{// Some auth code}
    // Google Login and Facebook Login
}

// class AuthV1{
//     loginV1(){
//         console.log("Login using Email and Password");
//     }
// }
// class AuthV2 extends AuthV1{
//     loginV2(){
//         console.log("Login using Google and Facebook");
//     }
// }

// const userAuthV1 = new AuthV1();
// userAuthV1.loginV1();
// const userAuthV2 = new AuthV2();
// userAuthV2.loginV1(); // Inherited from AuthV1
// userAuthV2.loginV2(); // Defined in AuthV2

//APPV1.0
class AuthV1{
    login(){
        console.log("Login using Email and Password");
    }
}
//APPV2.0
class AuthV2 extends AuthV1{
    login(){
        console.log("Login using Google and Facebook");
    }
}

const userAuthV1 = new AuthV1();
userAuthV1.login();
const userAuthV2 = new AuthV2();
userAuthV2.login();