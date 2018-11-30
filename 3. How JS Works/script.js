// Hoisting


// //functions
// calculateAge(1994);
// function calculateAge(year) {
//   console.log(2018 - year);
// }
// // retirement(2004);
// var retirement = function(year) {
//   console.log(65 - (2018 - year));
// }
//
// // variables
// console.log(age);
// var age = 23;
// function foo() {
//   console.log(age);
//   var age = 65;
//   console.log(age);
// }
// foo();
// console.log(age);

// Scoping

// var a = "Hello";
// first();
// function first() {
//   var b = "Hi";
//   second();
//   function second() {
//     var c = "Hey";
//     console.log(a+b+c);
//   }
// }


// this keyword

// console.log(this);
// calculateAge(1985);
//
// function calculateAge(year) {
//   console.log(2018 - year);
//   console.log(this));
// }

// var john = {
//   name: john,
//   yearOfBirth: 1995,
//   calculateAge: function() {
//     console.log(this);
//     console.log(2018 - this.yearOfBirth);
//
//     // function innerFunction() {
//     //   console.log(this);
//     // }
//     // innerFunction();
//   }
// }
// john.calculateAge();
//
// var mike = {
//   name: "Mike",
//   yearOfBirth: 1994
// };
//
// mike.calculateAge = john.calculateAge;
// mike.calculateAge();
