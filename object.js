const user1={
    id:1,
    name:"Sanchita sahoo",
    age:19,
    email:"sanchitasahoo@gamil.com"
};

console.log(user1.name);
console.log(user1.age);
console.log(user1["email"]);
user1.phone="7866075956";
console.log(user1);

user1.name="sanchita sau";
console.log(user1);

const user2={
    id:2,
    name:"Ankita rout",
    age:19,
    email:"ankita@example.com",
    address:{
        street:"123 Main st",
        city:"New York",
        state:"NY",
        zip:"10001"
    }
}

console.log(user2.address.city);
console.log(user2);


const alluser=[
    {
        id:1,
        name:"sanchita sahoo",
        age:19,
        email:"sanchitasahoo@gmail.com"
    },
    {
        id:2,
        name:"Ankita rout",
        age:19,
        email:"ankita@example.com"
    },
    {
        id:3,
        name:"jyoita das",
        age:20,
        email:"jyoita@example.com",
    }
]

const user3={
    id:4,
    name:"kaberi dandapat",
    age:20,
    email:"kaberi@example.com",
};

console.log(Object.keys(user3));
console.log(Object.values(user3));
console.log(Object.entries(user3));