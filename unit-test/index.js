// unit-test/index.js
// get 2 numbers from the input add them together, and print the response

// process.argv == command line arguments for this script
//EX: node index.js whatever whatever2
// 0 = node
// 1 = index.js
// 2 = whatever
// 3 = whatever2
const a = process.argv[2];
const b = process.argv[3];

// convert the strings to numbers and print
const add = require('./add.js');
console.log(
  add(a, b)
)
