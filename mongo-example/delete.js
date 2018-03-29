// delete.js
const getDb = require('./mongo');
const ObjectId = require('mongodb').ObjectId;

getDb(db => {
  db.collection('random')
    .deleteMany({ //find by this object
      something: 'new'
    }, (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log('Remove result', result);
      }
    })
});
