const eqArrays = require("../eqArrays");
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("should return true when given [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("should return false when given ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  })
})
