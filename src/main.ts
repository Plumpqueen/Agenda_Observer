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

interface ClassroomInterface {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}
interface Observer {
    // Receive update from subject.
    update(subject: ClassroomInterface): void;
}

class Classroom implements ClassroomInterface{
    name:string;
    place:number;
    state:boolean;
    private observers: Observer[] = [];

    constructor(name:string, place:number,state:boolean){
        this.name=name;
        this.place=place;
        this.state=state;
    }
    public attach(observer: Observer): void {
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        this.observers.splice(observerIndex, 1);
    }

    public notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public bookAClass(): void {
        console.log('\nChange classroom status');
        let status:string="";
        if(this.state === true) {
            this.state = false;
            status = "Not available";
        }else{
            this.state = true;
            status = "Available"
        }
        console.log(`Classroom status has just been changed to: ${status}`);
        this.notify();
    }
}

class ConcreteObserverA implements Observer {
    public update(subject: ClassroomInterface): void {
        if (subject instanceof Classroom && subject.state === false) {
            console.log('This classroom is already taken ! Choose another one');
        }
    }
}
class ConcreteObserverB implements Observer {
    public update(subject: ClassroomInterface): void {
        if (subject instanceof Classroom && (subject.state === true)) {
            console.log('Congratulations, the classroom has been booked');
        }
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
    const classroom1:Classroom = new Classroom("B114",5,true);
    const classroom2:Classroom = new Classroom("B214",6,true);
    const classroom3:Classroom = new Classroom("B314",7,true);

    //* Students declarations
    const student1:Student = new Student("Jean","DELAFONTAINE");
    const student2:Student = new Student("Pierre","POLJAK");

    //*Teachers declarations
    const teacher1:Teacher = new Teacher("Henri","DESMATHS");

    //*Employees declarations
    const cleaner1:Cleaner = new Cleaner("Monsieur","PROPRE",345);


const observer1 = new ConcreteObserverA();
classroom1.attach(observer1);

const observer2 = new ConcreteObserverB();
classroom1.attach(observer2);

//*Call this function everytime we create a new book:Book
classroom1.bookAClass();
classroom1.bookAClass();

classroom1.detach(observer2);

classroom1.bookAClass();



}

main();

export default main;
