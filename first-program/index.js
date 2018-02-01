// first-program/index.js

const colors = require('colors'); // from npm
const fs = require('fs'); // native

console.log("Colors is pretty cool".rainbow);

fs.writeFileSync('something.txt', "HELLO!");
fs.writeFile('somethingelse.txt', "HELLO!", (err) => {
  console.log('If there was an error, it is', err);
  console.log('Done writing somethingelse.txt');
});

console.log('All Done');
