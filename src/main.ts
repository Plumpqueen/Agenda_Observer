abstract class Person{
    firstname:string;
    lastname:string;
    employee_number?:number;

    constructor(firstname:string, lastname:string,employee_number?:number){
        this.firstname = firstname;
        this.lastname = lastname;
        this.employee_number = employee_number;
    }
    sayMyName():string{
        console.log(this.lastname);
        return this.lastname;
    }
}
class Student extends Person{
    study(){
        console.log("Study");
        return "study";
    }
}
class Teacher extends Person {
    teach(){
        console.log("teach");
        return "teach";
    }
}
class Cleaner extends Person {
    employee_number:number;

    clean(){
        console.log("clean");
        return "clean";
    }
}
class Classroom{
    name:string;
    place:number;
    constructor(name:string, place:number){
        this.name=name;
        this.place=place;
    }
}
class Book{
    date:Date;
    subject:string;
    duration:number;
    classroom:Classroom;

    constructor(date:Date, subject:string, duration:number,classroom:Classroom) {
        this.subject=subject;
        this.duration=duration;
        this.classroom=classroom;
    }
}


function main(): void {
    //*Classrooms declarations
    const classroom1:Classroom = new Classroom("B114",5);
    const classroom2:Classroom = new Classroom("B214",6);
    const classroom3:Classroom = new Classroom("B314",7);

    //* Students declarations
    const student1:Student = new Student("Jean","DELAFONTAINE");
    const student2:Student = new Student("Pierre","POLJAK");

    //*Teachers declarations
    const teacher1:Teacher = new Teacher("Henri","DESMATHS");

    //*Employees declarations
    const cleaner1:Cleaner = new Cleaner("Monsieur","PROPRE",345);

    console.log(cleaner1);

}

main();

export default main;
