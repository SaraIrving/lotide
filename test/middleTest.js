
const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it('Should return [2] when given [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('Should return [3] when given [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('Should return [3, 4] when given [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it('Should return [] when given [1]', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('Should return [] when given [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});

