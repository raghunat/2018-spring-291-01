// mongo.js
// To expose a function that connects to mongo
const mongodb = require('mongodb');

// Credentials
const dbName = 'scavanger-hunt';
const uri = `mongodb://291user:${process.env.PASS}@ds119449.mlab.com:19449/${dbName}`;

function getMongoConnection(cb) {
  mongodb.MongoClient.connect(uri, (err, client) => {
    if (err) {
      console.error(err);
      throw err;
    }

    console.log('Connected!');
    const db = client.db(dbName);
    cb(db);
  });
}


module.exports = getMongoConnection;
// TEST:
// getMongoConnection();
