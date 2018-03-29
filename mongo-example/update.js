// update.js

const getDb = require('./mongo');
const ObjectId = require('mongodb').ObjectId;

getDb(db => {
  db.collection('random')
    .updateOne(
      {
        _id: ObjectId('5aba789a042287547e74da67')
      }, // object here is the filter
      {
        $set: {
          something: 'else'
        }
      }, // how to change that object
      (err, result) => {
        if (err) {
          throw err;
        } else {
          console.log('Update result', result);
        }
      }
    );

});
