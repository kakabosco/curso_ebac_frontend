class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
}

class Class {
    constructor() {
        this.students = [];
    }

    addStudents(...newStudents) {
        this.students.push(...newStudents);
    }

    filterApproved() {
        return this.students.filter(student => student.grade >= 6);
    }
}

const kaique = new Student("Kaique", 9);
const rafaella = new Student("Rafaella", 10);
const mayra = new Student("Mayra", 5);
const rogerio = new Student("Rogério", 4);
const joao = new Student("João", 7);

const myClass = new Class();
myClass.addStudents(kaique, rafaella, mayra, rogerio, joao);

const approvedStudents = myClass.filterApproved();
const formattedOutput = approvedStudents.map((student, index) => `${index + 1}. ${student.name} - Nota: ${student.grade}`).join('\n');
console.log("Alunos Aprovados:\n" + formattedOutput);
