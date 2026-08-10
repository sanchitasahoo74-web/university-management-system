class person{
    constructor(id,name,age,Gender){
        this.id=id;
        this.name=name;
        this.age=age;
        this.Gender=Gender;
    }
    display(){
        console.log(`ID:${this.id}`);
        console.log(`Name:${this.name}`);
        console.log(`age:${this.age}`);
        console.log(`Gender:${this.Gender}`);
    }
}

module.exports=person;