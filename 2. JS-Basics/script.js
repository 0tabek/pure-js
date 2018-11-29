// Coding Challenge #1

// var Otabek_height = 170,
//   John_height = 180;
// var Otabek_age = 24,
//   John_age = 30;

// var Otabek = Otabek_age * Otabek_height;
// var John = John_age * John_height;

// if (Otabek > John) {
//   console.log("Winner: Otabek");
// } else if (John > Otabek) {
//   console.log("Winner: John");
// } else if (Otabek === John) {
//   console.log("No winner");
// }

// Functions

// function calculateAge(yearOfBirth) {
//   var age = 2018 - yearOfBirth;
//   return age;
// }

// var ageJohn = calculateAge(1989);
// var ageOtabek = calculateAge(1994);

// Arrays

// var names = ["Otabek", "John"];
// var years = new Array(1994, 1990);

// console.log(names[1]);
// names[1] = "Ben";
// console.log(names);

// names.push("Sue"); //adds to end
// console.log(names);
// names.unshift("Aybek"); // adds to beginning
// console.log(names);
// console.log(names.indexOf("Aybek"));

// Objects

// var john = {
//   name: "John",
//   lastName: "Smith",
//   yearOfBirth: 1994,
//   job: "engineer",
//   isMarried: false,
//   family: ["Jane", "Mark", "Bob"],
//   calculateAge: function() {
//     this.age = 2018 - this.yearOfBirth;
//   }
// };

// john.calculateAge();
// console.log(john);

// Loops

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
//
// var names = ["John", "Jane", "Mary", 'Mark'];
// for (var i=0; i < names.length; i++) {
//   console.log(names[i]);
// }
//
// for (var i = names.length - 1; i >= 0 ; i--) {
//   console.log(names[i]);
// }
//
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// for (var i = 0; i<= 5; i++) {
//   console.log(i);
//
//   if (i === 3) {
//     break;
//   }
// }

// for (var i = 0; i<= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//
//     console.log(i);
// }

// Coding Challenge

// var years = [1994, 1995, 2008];
// function printFullAge (years) {
//   var newArray = [];
//   for (var i=0; i<years.length; i++) {
//     if (2018 - years[i] > 18) {
//       newArray.push(true);
//     }
//     else {
//       newArray.push(false);
//     }
//   }
//   console.log(newArray);
// }
// printFullAge(years);
