class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    talk(){
        console.log(`hi this is kk`);
    }
}
class Student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;

    }
}
class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
        
    }
}
