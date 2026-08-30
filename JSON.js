// JSON=> JavaScript Object Notation

// {
//     "success": true,
//     "message": "Data fetched successfully",
//     "data":[]
// };

// Javascript => JSON
const user3={
    id:4,
    name:"Rajesh Das",
    age:30,
    email:"rajesh@example.com"
}
const json=JSON.stringify(user3);
console.log(json);

// JSON => Javascript
const objectData=JSON.parse(json);
console.log(objectData);