// queue-example/index.js
const express = require('express');

const app = express();

const queue = [];
let currentTicketNumber = 1;

app.get('/enqueue', (req, res) => {
  queue.push({
    ticketNumber: currentTicketNumber,
    status: 'QUEUED'
  });
  res.send('Item enqueued, ticket number is = ' + currentTicketNumber);
  currentTicketNumber++;
  console.log('Item added, current queue size = ' + queue.length);
});

// any :name in a route is called a request param,
// And the caller can provide it
app.get('/ticket/:id', (req, res) => {
  // TODO
  res.send('Your ticket is not yet ready');
  // res.send('Your ticket is ready! Completed at ?');
});

app.get('/tickets', (req, res) => {
  res.json(queue);
});


// QUEUE WORKER
setInterval(() => {
  let processCount = 0;

  queue.forEach(item => {
    if (processCount == 5) {
      return;
    }
    if (item.status == 'QUEUED') {
      item.status = 'COMPLETED';
      item.completedAt = new Date(); // save when it was completed
      processCount++;
    }
  });
}, 5000);


app.listen(8000, () => console.log('Server Started'));
