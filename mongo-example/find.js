// find.js

const getDb = require('./mongo');

getDb(db => {
  db.collection('random')
    .find({}) // filters
    // .limit(1)
    .toArray((err, docs) => {
      if (err) {
        throw err;
      }

      console.log("Documents are", docs);
    });
});
