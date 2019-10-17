// CODE here for your Lambda Classes
// Person Class
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}
//Instructor Class
class Instructor extends Person {
 constructor(instructorOptions) {
     super(instructorOptions);
     this.specialty = instructorOptions.specialty;
     this.favlanguage = instructorOptions.favlanguage;
        this.catchPhrase = instructorOptions.catchPhrase;
        }
        demo(subject) {
            return `Today we are learning about ${subject}.`;
        }
        grade(student,subject) {
            return `${student.name} receives a perfect score on ${subject}`;
        }
    }    //Instructor
        
    
//Student Class
class Student extends Person {
constructor(studentOptions) {
        super(studentOptions);
        this.previousBackground = studentOptions.previousBackground;
        this.className = studentOptions.className;
        this.favSubjects = studentOptions.favSubjects;
            }
            listsSubjects() {
                return `${this.favSubjects}`; //?
            }
            PRAssignment(student, subject) {
                return `${student.name} has submitted a PR for ${subject}`;
            }
            sprintChallenge(student, subject) {
                return `${student.name} has begun spring challenge on ${subject}`;
            }
        }   //Student

    
//ProjectManager Class 
class ProjectManager extends Instructor {
    constructor(PmOptions) {
        super(PmOptions);
        this.gradClassName = PmOptions.gradClassName;
        this.favInstructor = PmOptions.className;
    }
    standUp(name, channel) {
        return `${name} announces to ${channel}, @${channel} standy times!`;
    }
    debugsCode(name, student, subject) {
        return `${name} debugs ${student}'s code on ${subject}`;
    }
 }// PM

 // OBJECTS
const Josiah = new Person ({
    "name": 'Josiah',
    "age": 31,
    "location":'Nigeria',
    "gender": "M",
 });
 const tim = new Person({
    "name": 'Tim',
    "age": 40,
    "location": 'New York',
    "gender": "M",
 });
 const don = new Person({
    "name": 'Don',
    "age": 45,
    "location": 'Hawaii',
    "gender": "M",
 });
 
 const josh = new Instructor({
    "name": 'Josh',
    "age": 48,
    "location": 'Utah',
    "gender": "M",
    "specialty": 'Redux',
    "favLanguage": 'Python',
    "catchPhrase": 'Never Surrender!!',
 });
 const Jasyn = new Instructor({
    "name": 'Jasyn',
    "age": 35,
    "location": 'Florida',
    "gender": "M",
    "specialty": 'JavaScript',
    "favLanguage": 'French',
    "catchPhrase": 'Viva Cuba!!',
 });
 const John = new Instructor({
    "name": 'John',
    "age": 30,
    "location": 'North Dakota',
    "gender": "F",
    "specialty": 'Zoom',
    "favLanguage": 'Spanish',
    "catchPhrase": 'Lets talk about it!!',
 });
 
 const Sebastian = new Student({
    "name": 'Sabastian',
    "age": 30,
    "location": 'San Francisco',
    "gender": "M",
     "previousBackground": 'Teacher',
    "className": 'CS10',
    "favSubjects": 'Art',
 });
 
 const maribel = new Student({
    "name": 'Maribel',
    "age": 36,
    "location": 'Phillipines',
    "gender": "F",
    "previousBackground": 'Wev Developer',
    "className": 'CS10',
    "favSubjects": 'Math',
 });
 
 const Emma = new Student({
    "name": 'Emma',
    "age": 39,
    "location": 'San Diego',
    "gender": "F",
    "previousBackground": 'Librarian',
    "className": 'CS10',
    "favSubjects": 'Coding',
 });
 
 const Amin = new ProjectManager({
    "name": 'Amin',
    "age": 33,
    "location": 'Nigeria',
    "gender": 'M',
    "specialty": 'Python tutor',
    "favLanguage": 'English',
    "catchPhrase": 'just do it!!',
    "gradClassName": 'CS5',
    "favInstructor": 'Gabriel Cebrejas',
 });
 const Matt = new ProjectManager({
    "name": 'Matt',
    "age": 45,
    "location": 'Mississippi',
    "gender": 'M',
    "specialty": 'JS',
    "favLanguage": 'Italian',
    "catchPhrase": 'Finish your Repl.it!!',
    "gradClassName": 'CS1',
    "favInstructor": 'Alex Emedeme',
 });
 const Chinedu = new ProjectManager({
    "name": 'Chinedu',
    "age": 35,
    "location": 'Phillipines',
    "gender": 'M',
    "specialty": 'Oracle',
    "favLanguage": 'Chinese',
    "catchPhrase": 'Never say Die!!',
    "gradClassName": 'CS10',
    "favInstructor": 'Dan Frehner',
 });
 
 
 console.log(Josiah.name); //?
 console.log(Josiah.speak());
 josh.speak();
 console.log(josh.demo('React'));
 console.log(Jasyn.grade(Jasyn,'JavaScript'));
 console.log(John.grade(John,'JavaScript'));
 
 console.log(Emma.listsSubjects());
 console.log(Emma.PRAssignment(Emma, 'Oracle'));
 console.log(Sebastian.sprintChallenge(Sebastian, 'React'));
 
 console.log(Amin.gradClassName);
 console.log(Amin.standUp('Amin', 'CS10 Channel'));
 console.log(Chinedu.debugsCode('Chinedu','Jasyn','Classes'));