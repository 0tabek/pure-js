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



// JavaScript Function Parameters

var myObject = {
 firstName:"John",
 lastName: "Doe",
 fullName: function () {
   return this;
 }
}

console.log(myObject.fullName());      // Will return "John Doe"



// JavaScript Function Call

var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

var person1 = {
  firstName: "John",
  lastName: "Doe"
}

var person2 = {
  firstName: "Mary",
  lastName: "Doe"
}

var x = person.fullName.call(person2);

// JavaScript Function Apply

var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
}

var person1 = {
  firstName: "John",
  lastName: "Doe"
}

var x = person.fullName.apply(person1, ["Urgench", "UZB"]);

Math.max(1,2,3);
Math.max.apply(4, [1,2,3]);

// call() method takes arguments separately
// apply() method takes arguments as an array

// In JS strict mode, if the first argument of the apply() method is not an Object,
// it becomes the owner (object) of the invoked function. In "non-strict" mode, it
// becomes the global object.


// JavaScript Closures

var add = (function () {
  var counter = 0;
  return function () { counter += 1; return counter; }
}) ();

add();
console.log(add());

*/
