// create.js

const getDb = require('./mongo');

getDb(db => {
  db.collection('random')
    //insertMany([{}, {}, {}])
    .insert({
      something: 'new'
    }, (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log('The newly created item', result);
      }
    });
});
