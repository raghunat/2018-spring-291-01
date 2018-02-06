//index.js
const colors = require('colors');
const express = require('express');

console.log('Starting our webserver'.green);
const server = express();

server.get('/', (request, response) => {
  console.log('An incoming request!'.red);
  response.send('Yea Boi!');
});

server.listen(3000, () => {
  console.log('Server is listening'.gray);
});
