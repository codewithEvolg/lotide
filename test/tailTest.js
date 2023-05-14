const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });

  it("returns [6,7] for [5,6,7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6,7]);
  });

  it("returns empty array for [5]", () => {
    assert.deepEqual(tail([5]), []); 
  });
});



// const tail = require('../tail');
// const assertEqual = require('../assertEqual')

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"