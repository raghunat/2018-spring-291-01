// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// populate req.body with whatever they send
app.use(bodyParser.json());

// require the custom routers
const loginRoutes = require('./login.js');
app.use('/login', loginRoutes);

app.get('/thisismytestpath', (req, res) => {
  res.send('TEST OK');
});

app.post('/examplepost', (req, res) => {
  if (req.body.password === 'secret') {
    res.send('Logged In!');
  } else {
    res.send('Check yo self');
  }
});

app.listen(3000, () => {
  console.log('App is listening...');
});
