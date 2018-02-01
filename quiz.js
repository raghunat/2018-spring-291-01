// quiz.js
console.log("What is the best song?");

// native modules come with node
const readline = require('readline');

// Allows us to start grabbing input
const rl = readline.createInterface({
  input: process.stdin, //take input from terminal
  output: process.stdout //send ouput to terminal
});

// Grabs input and posts a message to the log
rl.question("What is your answer?", (answer) => {
  console.log('Your answer was', answer);
  rl.close();
});

console.log('HMMMMMMMM');
