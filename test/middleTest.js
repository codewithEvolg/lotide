const assert = require('chai').assert;
const _ = require('././../index')
//const middle   = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(_.middle([1, 2, 3]), [2]);
  });

  it("returns [4,5] for [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5, 6, 7, 8]), [ 4, 5]);
  });

  it("returns empty array for [5]", () => {
    assert.deepEqual(_.middle([5]), []); 
  });
});

// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual')

// assertArraysEqual(middle([1, 2, 3]), [ 2 ]);
// assertArraysEqual(middle([1, 2, 3, 4,5,6,7,8]), [ 4, 5]);