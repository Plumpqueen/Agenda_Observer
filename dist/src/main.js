"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(firstname, lastname, employee_number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.employee_number = employee_number;
    }
    sayMyName() {
        console.log(this.lastname);
        return this.lastname;
    }
}
class Student extends Person {
    study() {
        console.log("Study");
        return "study";
    }
}
class Teacher extends Person {
    teach() {
        console.log("teach");
        return "teach";
    }
}
class Cleaner extends Person {
    clean() {
        console.log("clean");
        return "clean";
    }
}
class Classroom {
    constructor(name, place, state) {
        this.observers = [];
        this.name = name;
        this.place = place;
        this.state = state;
    }
    attach(observer) {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }
    notify() {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    someBusinessLogic() {
        console.log('\nCheck if this Classroom is available');
        if (this.state === true) {
            this.state = false;
        }
        else {
            this.state = true;
        }
        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}
class ConcreteObserverA {
    update(subject) {
        if (subject instanceof Classroom && subject.state === false) {
            console.log('This classroom is already taken ! Choose another one');
        }
    }
}
class ConcreteObserverB {
    update(subject) {
        if (subject instanceof Classroom && (subject.state === true)) {
            console.log('Congratulations, the classroom has been booked');
        }
    }
}
class Book {
    constructor(date, subject, duration, classroom) {
        this.subject = subject;
        this.duration = duration;
        this.classroom = classroom;
    }
}
function main() {
    //*Classrooms declarations
    const classroom1 = new Classroom("B114", 5, true);
    const classroom2 = new Classroom("B214", 6, true);
    const classroom3 = new Classroom("B314", 7, true);
    //* Students declarations
    const student1 = new Student("Jean", "DELAFONTAINE");
    const student2 = new Student("Pierre", "POLJAK");
    //*Teachers declarations
    const teacher1 = new Teacher("Henri", "DESMATHS");
    //*Employees declarations
    const cleaner1 = new Cleaner("Monsieur", "PROPRE", 345);
    const observer1 = new ConcreteObserverA();
    classroom1.attach(observer1);
    const observer2 = new ConcreteObserverB();
    classroom1.attach(observer2);
    classroom1.someBusinessLogic();
    classroom1.someBusinessLogic();
    classroom1.detach(observer2);
    classroom1.someBusinessLogic();
    console.log(cleaner1);
}
main();
exports.default = main;
//# sourceMappingURL=main.js.map