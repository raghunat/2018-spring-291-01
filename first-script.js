// first-script.js

console.log("Today is Thursday");

// VARIABLES
var myAge = 201;
const myLastName = "Raghunath";
let myFirstName = "Professor";

// BAD: myLastName = "Brady";
myAge = 202;
myFirstName = "Student";
console.log(myAge, myFirstName);
myAge = false;
console.log(myAge);

function doThings() {
  var myThing = 'yassss';
  let myOtherThing = 'nooooo';

  console.log(myThing, myOtherThing);
}

// call the above function
doThings();

// BAD: console.log(myThing, myOtherThing);

console.log('---------Objects and Dates---------');

const today = new Date(); //creates a date object
console.log(today);
today.setDate(today.getDate() + 5); // Persistent change
console.log(today);
today.setTime(today.getTime() + 100);
console.log(today.getFullYear());
console.log(today.toLocaleDateString());
console.log(today.toUTCString());
console.log(today.toLocaleTimeString());

console.log('----Literal Objects----');

const something = {
  flabby: 'patty',
  cashme: 'outside',
  confrontational: true,
  age: -578634234234,
  '00012345': console.log
};

console.log(something);
console.log(something.flabby, something.cashme);

console.log('----Class Objects----');

class Car {
  // instance class method
  sound() {
    console.log('vroooooooom');
  }

  static numberOfWheels() {
    console.log(4);
  }
}

const myCar = new Car();
myCar.sound();
Car.numberOfWheels();




console.log('--------Iteration and Conditionals--------');

if (10 > 5) {
  console.log('Yes 10 is greater than 5');
} else {
  console.log("You will never see this");
}

if (something.flabby.length == 5) {
  console.log('something.flabby\'s length is == 5')
}

if (0 == false) {
  console.log('0 == false is a true statement');
}

if (0 !== false) {
  console.log('0 !== false is a true statement');
}

for (var i = 0; i < 10; i++) {
  console.log(i);
}


console.log('------------Modules------------')

const secondModule = require('./second-script.js');
console.log(secondModule.luckyNumber);






























//
