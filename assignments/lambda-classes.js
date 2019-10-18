// CODE here for your Lambda Classes


// $$$$$$$$$$$$$$$$$$$$$$$$ BASE CLASS $$$$$$$$$$$$$$$$$$$$$$$$ //

class Person {
    constructor(attr) {
        this.name = attr.name,
        this.age = attr.age,
        this.location = attr.location
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}



// $$$$$$$$$$$$$$$$$$$$$$$$ INSTRUCTOR CLASS $$$$$$$$$$$$$$$$$$$$$$$$ //

class Instructor extends Person {
    constructor(instruct) {
        super(instruct);
        this.specialty = instruct.specialty,
        this.favLanguage = instruct.favLanguage,
        this.catchPhrase = instruct.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}


const instructor1 = new Instructor ({
    name: 'Ethel',
    age: 78,
    location: 'Palo Alto',
    specialty: 'BASIC',
    favLanguage: 'FORTRAN',
    catchPhrase: 'Bogus!'
});

const instructor2 = new Instructor ({
    name: 'Leo',
    age: 82,
    location: 'San Jose',
    specialty: 'batch-processing',
    favLanguage: 'binary',
    catchPhrase: 'What a hack!'
});


console.log(instructor1.demo('HTML'));
console.log(instructor2.grade({name: 'Billy'},'Javascript'));



// $$$$$$$$$$$$$$$$$$$$$$$$ STUDENT CLASS $$$$$$$$$$$$$$$$$$$$$$$$ //

class Student extends Person {
    constructor(learn) {
        super(learn);
        this.previousBackground = learn.previousBackground,
        this.className = learn.className,
        this.favSubjects = learn.favSubjects
    }
    listsSubjects() {
        this.favSubjects.forEach(function(subject) {
            return console.log(subject);
        })
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}


const student1 = new Student ({
    name: 'Betty',
    age: 55,
    location: 'San Franisco',
    previousBackground: 'carpentry',
    className: 'WEB25',
    favSubjects: ['Prototypes', 'for Loops', 'if Statements']
});

const student2 = new Student ({
    name: 'Ronald',
    age: 61,
    location: 'Huntington Beach',
    previousBackground: 'journeyman',
    className: 'WEB25',
    favSubjects: ['this keyword', 'higher order function', 'array']
});

const student3 = new Student ({
    name: 'Courtland',
    age: 31,
    location: 'Baton Rouge',
    previousBackground: 'Cost Manager',
    className: 'WEB25',
    favSubjects: ['Javascript', 'HTML', 'CSS']
});


student1.listsSubjects();
student2.listsSubjects();
student3.listsSubjects();
console.log(student2.PRAssignment('Arrays project'));
console.log(student3.sprintChallenge('React'));



// $$$$$$$$$$$$$$$$$$$$$$$$ PROJECTMANAGERS CLASS $$$$$$$$$$$$$$$$$$$$$$$$ //

class ProjectManagers extends Instructor {
    constructor(manage) {
        super(manage);
        this.gradClassName = manage.gradClassName,
        this.favInstructor = manage.favInstructor
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}


const manager1 = new ProjectManagers ({
    name: 'Shirley',
    age: 27,
    location: 'Natchitoches',
    specialty: 'Logic',
    favLanguage: 'C',
    catchPhrase: 'Throw me somethin, Mister!',
    gradClassName: 'DS1',
    favInstructor: 'Leo'
})

const manager2 = new ProjectManagers ({
    name: 'Noah',
    age: 30,
    location: 'Cut Off',
    specialty: 'Loops',
    favLanguage: 'Visual Basic',
    catchPhrase: 'Laissez les bon temps rouler',
    gradClassName: 'DS1',
    favInstructor: 'Ethel'
})

console.log(manager1.standUp('web25_allie'));
console.log(manager2.debugsCode({name: 'Buster'}, 'vanilla CSS'));