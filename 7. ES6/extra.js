// Lecture: Destructing

// // ES5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];
//
// // ES6
// const [name, age] = ['John', 26];
// console.log(name);
// console.log(age);
//
// const obj = {
//   firstName: 'John',
//   lastName: 'Smith'
// };
//
// const {firstName : a, lastName : b} = obj;
// console.log(a);
// console.log(b);
//
//
// function calcAgeRetirement(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age]
// }
//
// const [age, retirement] = calcAgeRetirement(1994);
// console.log(age);
// console.log(retirement);


// Lecture: Arrays
//
// const boxes = document.querySelectorAll('.box');
//
// // ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
//   cur.style.backgroundColor = 'dodgerblue';
// });
// //
// // // ES6
// const boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
//
//
// // ES5
//
// for(var i=0; i < boxesArr5.length; i++) {
//
//   if (boxesArr5[i].className === 'box blue') {
//     continue;
//   }
//
//   boxesArr5[i].textContent = 'I changed to blue!';
//
// }

//// ES6
//
// for (const cur of boxesArr6) {
//   if(cur.className.includes('blue')) {
//     continue;
//   }
//   cur.textContent = 'I changed to blue!';
// }
//
//
// //ES5
// var ages = [12, 17, 8, 21, 14, 11];
// var full = ages.map(function(cur) {
//   return cur >= 18;
// });
// console.log(full);
//
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);
//
//
// //ES6
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));


// Lecture: Spread operator


// function addFourAges (a, b, c, d) {
//   return a+b+c+d;
// }
//
// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);
//
// // ES5
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);
//
// // ES6
// const sum3 = addFourAges(...ages);
// console.log(sum3);
//
// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];
// const bigFamily = [...familySmith, 'Lily', ...familyMiller];
// console.log(bigFamily);
//
//
// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];
//
// Array.from(all).forEach(cur => cur.style.color = 'purple');


// Lecture: Rest parameters


// ES5


/*
function isFullAge5() {
  // console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function(cur) {
    console.log((2019 - cur) >= 18);
  })
}
//
// isFullAge5(1990, 2003, 1965);
//

// ES6
function isFullAge6(...years) {
  years.forEach(cur => console.log((2019 - cur) >= 18));
}

isFullAge6(1990, 2003, 1965);
*/


// function isFullAge5(limit) {
//   // console.log(arguments);
//   var argsArr = Array.prototype.slice.call(arguments, 1);
//
//   argsArr.forEach(function(cur) {
//     console.log((2019 - cur) >= limit);
//   })
// }
// //
// isFullAge5(16, 1990, 2003, 1965);
// //
//
// // ES6
// function isFullAge6(imit, ...years) {
//   years.forEach(cur => console.log((2019 - cur) >= limit));
// }
//
// isFullAge6(1990, 2003, 1965);


// Lecture: Default parameters

//ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

  lastName === undefined ? lastName = 'Smith' : lastName = lastName;
  nationality === undefined ? nationality = 'american' : nationality = nationality;

  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;
}

var john = new SmithPerson('John',1990, 'Atabaev');

var emily = new SmithPerson('Emily', 1993, 'Diaz', 'spanish');


// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;
}

var john = new SmithPerson('John',1990);

var emily = new SmithPerson('Emily', 1993, 'Diaz', 'spanish');
*/



// Lecture: Maps


const question = new Map();
question.set('question', 'What is the official name?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, "Wrong");

console.log(question.get('question'));
console.log(question.size);

if(question.has(4)) {
  // question.delete(4);
  console.log('Answer 4 is here');
}

// question.clear();

// question.forEach((value, key) =>
// console.log(`This is ${key}, and it's set to ${value}`));


for (let [key, value] of question.entries()) {
  if(typeof(key) === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
