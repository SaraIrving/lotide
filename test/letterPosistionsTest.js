const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("Should return [1] when given letterPositions('hello').e", () => {
    assert.deepEqual(letterPositions('hello').e, [1]);
  });

  it("Should return [1, 3] when given letterPositions('Sara').a", () => {
    assert.deepEqual(letterPositions("Sara").a, [1, 3]);
  })

  it("Should return {s: [0], a: [1, 3], r: [2]} when given 'Sara'", () => {
    assert.deepEqual(letterPositions("Sara"), {s: [0], a: [1, 3], r: [2]});
  })

  it("Should return [3, 5, 15, 18] when given letterPositions('lighthouse in the house').h", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  })
});







// //TESTS:
console.log(letterPositions("Sara"));
// //console.log(letterPositions("lighthouse in the house"));

// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("Sara").a, [1, 3]);
// assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
