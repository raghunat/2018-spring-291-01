// index.js
const app = require('express')();

// example route using query parameters
// for example
//    localhost:3000/any?name=bob&age=21
app.get('/any', (req, res) => {
  // note, all values are strings
  // req.query holds any query params given
  res.json(req.query);
});

// example route using route parameters
// EX: localhost:3000/specific/something/else/1
app.get(
  '/specific/:one/:two/:three',
  (req, res) => {
    // note, all values are strings
    res.json(req.params);
});

app.listen(
  3000,
  () => console.log(
    'express-request api started'
  )
);
