/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

// */
// TASK 1
// - Write a Person Constructor that initializes `name` and `age` from arguments.
// - All instances of Person should initialize with an empty `stomach` array.
// - Give instances of Person the ability to `.eat("someFood")`:
//     + When eating an edible, it should be pushed into the `stomach`.
//     + The `eat` method should have no effect if there are 10 items in the `stomach`.
// - Give instances of Person the ability to `.poop()`:
//     + When an instance poops, its `stomach` should empty.
// - Give instances of Person a method `.toString()`:
//     + It should return a string with `name` and `age`. Example: "Mary, 50"
// */

// function Person(name,age) {
// this.name = name;
// this.age = age;
// this.stomach = [];
// }
// Person.prototype.tostring = function(name, age) {
// return `${this.name}, ${this.age}`;
// }

// Person.prototype.eat = function (someFood) {
// if (this.stomach.length < 10) {
// this.stomach.push(someFood);
// }
// }
// Person.prototype.poop = function (someFood) {
// if (this.stomach.length > 0) {
// this.stomach = []
// }
// } 


// ES6 refactored class
class Person{
    Constructor(name, age){
    this.name = name;
    this.age = age;
    this.stomach = [];
}

tostring() { 
return `${this.name}, ${this.age}`;
}

eat() {
if (this.stomach.length < 10) {
this.stomach.push(someFood);
 }
}

poop() {
if (this.stomach.length > 0) {
this.stomach = []
 }
} 
/*
TASK 2
- Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
- All instances built with Car:
    + should initialize with an `tank` at 0
    + should initialize with an `odometer` at 0
- Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
- Give cars ability to `.drive(distance)`. The distance driven:
    + Should cause the `odometer` to go up.
    + Should cause the the `tank` to go down taking `milesPerGallon` into account.
- A car which runs out of `fuel` while driving can't drive any more distance:
    + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

// function Car(model, milesPerGallon) {
// this.tank = 0;
// this.odometer = 0;
// this.milesPerGallon = milesPerGallon;
// this.model = model;
// }

// Car.prototype.fill= function(gallons) {
// this.tank = gallons;
// } 
// Car.prototype.drive = function(distance) {
// if (this.tank > 7) {
// this.odometer += distance;
// this.tank -= distance / this.milesPerGallon;
// }

// if (this.tank < 1) {
// this.odometer = distance - 1;
// this.tank = 0;
// return `I ran out of fuel at ${this.odometer} miles!`;
// }
// };

/*
TASK 3
- Write a Baby constructor subclassing Person.
- Besides `name`, Baby takes a second argument to initialize `favoriteToy`.
- Besides the methods on Person.prototype, babies have the ability to `.play()`:
    + Should return a string "Playing with x", x being the favorite toy.
*/
// function Baby(name, favouriteToy) {
// person.call(this, name);
// this.name = name;
// this.favouriteToy = favouriteToy;
// }

// Baby.prototype.play = object.create(person.Prototype);

// Baby.prototype.Play = function () {
//     return `playing with ${this.favouriteToy}`;
// }

// Baby.prototype.play = function (){
// return `Playing with ${this.favouritetoy}`
// };

class Baby extends Person {
    Constructor (name, favouriteToy) {
        super(name);
        this.favouriteToy = favouriteToy;
}

Play() {
    return `playing with ${this.favouriteToy}`;
 }
}
/* 
TASK 4

In your own words explain the four principles for the "this" keyword below:
1. Window Global object binding 
Window binding is like the forest of trees, not sure which one we are pointing at so we are just pointing at the forest. 
2. Implicit Binding 
Implicit binding means that we are pointing out a specific tree in our forest by saying "that tree"
3. New Binding 
New binding creates a new fucntion that says to plant that  new tree over there by using the "new" example within the code 
4. Explicit Binding 
This says I want to go plant a new tree over there. 
*/


