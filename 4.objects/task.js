let student1 = new Student("Олег", "мужской", 21);
let student2 = new Student("Анна", "женский", 19);


function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    if (this.marks !== undefined) { 
        this.marks.push(...marksToAdd);
    }
}

Student.prototype.getAverage = function () {
    let sum = 0;

    if (this.marks === undefined || this.marks.length === 0) { 
        return 0;
    }

    for (let i = 0; i < this.marks.length; i += 1) {
        sum += this.marks[i];
    }
    return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
