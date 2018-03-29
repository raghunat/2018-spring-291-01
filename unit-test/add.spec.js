// unit-test/add.spec.js

const add = require('./add.js');
const should = require('should');

describe('add module', () => {
  it('should add 2 numbers together', () => {
    add(3, 6).should.equal(9);
  })

  it('should add 2 quoted numbers together', () => {
    add("3", "6").should.equal(9);
  })
});

// Old primitive
// if (add(3, 6) != 9) {
//   throw "It's not working"
// } else if(add("3", "6") != 9) {
//   throw "It's not working"
// } else {
//   console.log('All Good!')
// }
