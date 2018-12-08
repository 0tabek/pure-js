// Lecture: Function constructor

// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }
//
// Person.prototype.calculateAge = function() {
//   console.log(2018 - this.yearOfBirth);
// }
//
// Person.prototype.lastName = 'Smith';
//
// var john = new Person('john', 1990, 'teacher');
// var jane = new Person('jane', 1969, 'designer');
//
// john.calculateAge();
// jane.calculateAge();
//
// console.log(john.lastName);
// console.log(jane.lastName);

// var personProto = {
//   calculateAge: function() {
//     console.log(2018- this.yearOfBirth);
//   }
// };
//
// var john = Object.create(personProto);
// john.name = "john";
// john.yearOfBirth = 1990;
// john.job = "teacher";
//
//
// var jane = Object.create(personProto, {
//   name: {value: 'Jane'},
//   yearOfBirth: {value: 1990},
//   job: {value: "designer"}
// });


// // Primitives vs Object
//
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);
//
//
// // Onjects
// var obj1 = {
//   name: "john",
//   age: 26
// };
//
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);
//
// // Functions
// var age = 27;
// var obj = {
//   name: "jonas",
//   city: "Lisbon"
// }
//
// function change(a,b) {
//   a= 36;
//   b.city = "San Francisco";
// }
//
// change(age, obj);
//
// console.log(age);
// console.log(obj.city);


// //Lecture: Passing functions as arguments
//
// var years = [1990, 1965, 1937, 2005, 1998];
//
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }
//
// function calculateAge(el) {
//   return  2018 - el;
// }
//
// function isFullAge(el) {
//   return el >= 18
// }
//
// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - (0.67 * el));
//   }
//   else {
//     return - 1;
//   }
// }
//
// var ages = arrayCalc(years, calculateAge);
// console.log(ages);
// var fullAges = arrayCalc(ages, isFullAge);
//
// console.log(ages);
// console.log(fullAges);


// Lecture: Functions returning Functions

// function interviewQuestion(job) {
//   if (job === "designer") {
//     return function(name) {
//       console.log(name + ", can you please explain what UX design is?");
//     }
//   } else if (job === "teacher") {
//     return function(name) {
//       console.log("What subject do you teach, " + name + '?');
//     }
//   } else {
//     return function(name) {
//       console.log("Hello", + name + ", what do you do?");
//     }
//   }
// }
//
//
// var teacherQuestion = interviewQuestion("teacher");
// var designerQuestion = interviewQuestion("designer");
// console.log(teacherQuestion("John"));
// console.log(designerQuestion("Jane"));
//
// interviewQuestion("teacher")("Jess");

// Lecture: IIFE

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();
//
// // What is inside parentheses can not be a statement
//
// (function () {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();
//
//
// (function (goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5);


// Lecture: Closures

// function retirement(retirementAge) {
//   var a = " years left until retirement.";
//   return function(yearOfBirth) {
//     var age = 2018 - yearOfBirth;
//     console.log((retirementAge - age) + a);
//   }
// }
//
// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);

// function interviewQuestion(job) {
//   return function(name) {
//     if (job === "designer") {
//       console.log(name + ", can you please explain what UX design is?");
//     } else if (job === "teacher")
//     {
//         console.log("What subject do you teach, " + name + "?");
//     } else {
//       console.log("Hello " + name + ", what do you do?");
//     }
//   }
// }
//
// interviewQuestion("teacher")("John");
// interviewQuestion("designer")("Jane");

// MDN Closures

// function makeAdder(x) {
//   return function add(y) {
//     return x + y;
//   };
// }
//
// var add5 = makeAdder(10);
// console.log(add5(2));

// var counter = (function() {
//   var privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment: function() {
//       changeBy(1);
//     },
//     decrement: function() {
//       changeBy(-1);
//     },
//     increment2: function() {
//       changeBy(2);
//     },
//     value: function() {
//       return privateCounter;
//     }
//   };
// })();
//
// console.log(counter.value());
// counter.increment2();
// counter.increment2();
// console.log(counter.value());
// counter.decrement();
// console.log(counter.value());


// var makeCounter = function() {
//   var privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment: function() {
//       changeBy(1);
//     },
//     decrement: function() {
//       changeBy(-1);
//     },
//     value: function() {
//       return privateCounter;
//     }
//   }
// };
//
// var counter1 = makeCounter();
// var counter2 = makeCounter();
//
// // alert(counter1.value());
// counter1.increment();
// counter2.increment();
// // alert(counter1.value());
// counter1.decrement();
// // alert(counter1.value());
// alert(counter2.value());


// var e = 10;
// function sum(a) {
//   return function(b){
//     return function(c){
//       return function(d){
//         return a + b + c + d + e;
//       }
//     }
//   }
// }
//
// console.log(sum(1)(2)(3)(4));
//
// var e = 10;
// function sum(a){
//   return function sum2(b) {
//     return function sum3(c) {
//       return function sum4(d) {
//         return a + b + c + d + e;
//       }
//     }
//   }
// }
//
// var s = sum(1);
// var s1 = s(2);
// var s2 = s1(3);
// var s3 = s2(4);
// console.log(s3); // log 20


// function MyObject(name, message) {
//   this.name = name.toString();
//   this.message = message.toString();
// }
//
// MyObject.prototype = {
//   getName: function() {
//     return this.name;
//   },
//   getMessage: function() {
//     return this.message;
//   }
// };

// function MyObject(name, message) {
//   this.name = name.toString();
//   this.message = message.toString();
// }
//
// MyObject.prototype.getName = function() {
//   return this.name;
// }
//
// MyObject.prototype.getMessage = function() {
//   return this.message;
// }


// Lecture: Bind, call and apply

var john = {
  name: "John",
  age: 26,
  job: "teacher",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log("Good " + timeOfDay + ", Ladies and gentlemen! I\'m " + this.name +
      ", I\'m " +
      this.job + " and I\'m " + this.age + " years old." );
    } else if (style === "friendly") {
      console.log("Hey! What\'s up? I\'m " + this.name +
      ", I\m " +
      this.job + " and I\'m " + this.age + " years old. Have a nice " +
      timeOfDay + ".");
    }
  }
}

var emily = {
  name: "Emily",
  age: 35,
  job: "designer"
};

john.presentation("formal", "morning");
john.presentation.call(emily, "formal", "morning");
// john.presentation.apply(emily, ["friendly", "morning"])

var johnFriedly = john.presentation.bind(john, "friendly");
johnFriedly("morning");
johnFriedly("night");

var emilyFormal = john.presentation.bind(emily, "formal");
