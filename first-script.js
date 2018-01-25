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
