const users=["Ramesh","Suresh","Mahesh","Rajesh","Ganesh"];

console.log(users[0]);
console.log(users[1]);

users.push("Dinesh");
console.log(users);

users.pop();
console.log(users);

users.shift();
console.log(users);

users.unshift("Ramesh");
console.log(users);

const nums=[10,20,30,40,50];
nums.forEach((num)=>{
    console.log(num);
})

const double=nums.map((num)=>{
    return num*2;
})
console.log(double);

const usersData=[
    {name:"Ramesh", age:22},
    {name:"Suresh", age:25},
    {name:"Mahesh", age:20},
    {name:"Rajesh", age:30},
    {name:"Ganesh", age:28},
    {name:"Dinesh", age:15},
    {name:"Sanchita", age:19},
];

const filteredUsers=usersData.filter((user)=>{
    return user.age>=20;
})

console.log(filteredUsers);


const user=usersData.find((user)=>{
    return user.name==="Sanchita";
})
console.log(user);

const hasUser=usersData.some((user)=>{
    return user.age>20;
})
console.log(hasUser);


const allUsers=usersData.every((user)=>{
    return user.age>20;
})
console.log(allUsers);

const percelValues=[100,200,300,400,500];
const total=percelValues.reduce((x,y)=>{
    return x+y;
},7);
console.log(total);
