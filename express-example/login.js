// login.js
const express = require('express');

const router = express.Router();

router.get('/test', (req, res) => res.send('TEST OK'));

router.post('/', (req, res) => {
  if (req.body.password == 'tomNjerry') {
    res.send('Logged In!');
  } else {
    res.status(403).send('Bad Password');
  }
});

module.exports = router;
