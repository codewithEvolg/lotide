const assert = require('chai').assert;
const _ = require('../index')

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it("returns drama for bestTVShowsByGenre", () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined for bestTVShowsByGenre", () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});