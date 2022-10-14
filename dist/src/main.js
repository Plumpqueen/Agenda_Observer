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
    constructor(name, place) {
        this.name = name;
        this.place = place;
    }
}
class Book {
}
function main() {
    //*Classrooms declarations
    const classroom1 = new Classroom("B114", 5);
    const classroom2 = new Classroom("B214", 6);
    const classroom3 = new Classroom("B314", 7);
    //* Students declarations
    const student1 = new Student("Jean", "DELAFONTAINE");
    const student2 = new Student("Pierre", "POLJAK");
    //*Teachers declarations
    const teacher1 = new Teacher("Henri", "DESMATHS");
    //*Employees declarations
    const cleaner1 = new Cleaner("Monsieur", "PROPRE", 345);
    console.log(cleaner1);
}
main();
exports.default = main;
//# sourceMappingURL=main.js.map