// use their built in module
const AWS = require('aws-sdk');
const fs = require('fs');

// specifically their rekognition service
const rekognition = new AWS.Rekognition({region: 'us-east-1'});

// call the service method to detect labels
const params = {
  Image: {
    Bytes: fs.readFileSync('test2.jpg')
  },
  MaxLabels: 10,
  MinConfidence: 50
}
rekognition.detectLabels(params, (err, result) => {
  if (err) {
    console.log(err);
    throw err;
  } else {
    console.log('Result is', result);
  }
});
