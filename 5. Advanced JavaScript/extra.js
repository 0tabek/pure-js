/*
// Object Literal
var person = {firstName: "John", lastName: "Doe", age:50};
// NEW keyword
var person2 = new Object();
person2.firstName = 1;
person2.lastName = 2;

var firstProperty = "firstName";

var a = person["firstName"];
var b = person.firstName;
var c = person[firstProperty];

for (variable in object) {
  code to be executed
}

var txt = "";
var person = {fname: "John", lname: "Doe", age: 25};
person.nationality = "English"
delete person.lname;
for (x in person) {
  txt += person[x];
}
console.log(txt);


var person = {
  firstName: "Otabek",
  lastName: "Atabaev",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
console.log(person.fullName().toUpperCase());


// JavaScript Accessors (Getters and Setters)

var person = {
  language: "Uzbek",
  get lang() {
    return this.language;
  },
  set lang(lang) {
    this.language = lang;
  }


var obj = {
  counter: 0,
  get increment() {
    this.counter++;
  },
  get decrement() {
    this.counter--;
  },
  set add(value) {
    this.counter += value;
  },
  set subtract(value) {
    this.counter -= value;
  }
}
}

// Prototypes

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

Person.prototype.nationality = "English";
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};


// JavaScript ES5 Object Methods

var person = {
  firstName: "john",
  lastName: "Joe",
  language: "En"
};

Object.defineProperty(person, "language", {value: "NO"})
Object.defineProperty(person, "year", {value: "2018"})
Object.defineProperty(person, "language", {enumerable: true});
Object.defineProperty(person, "fullname", {
  get: function () {return this.firstName + " " + this.lastName;}
});
Object.getOwnPropertyNames(person);
Object.keys(person);
*/


/*

// JavaScript Functions

// var myFunction = new Function("a", "b", "return a * b");
var myFunction = function (a,b) {return a * b};
var x = myFunction(4,3);
var y = myFunction(5,6);

(function() {
  var x = "Hello!";
  console.log(x);
})();

var x = myFunction(4,3) * 2;

// ES5
var x = function(x, y) {
  return x * y;
}

// ES6
const x = (x,y) => x * y;

*/

// JavaScript Function Parameters
