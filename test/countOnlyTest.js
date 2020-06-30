const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it('should return {"Jason": 1, "Karima": undefined, "Fang": 2} when given ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"]', () => {
    assert.deepEqual(countOnly(["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"], { "Jason": true, "Karima": true, "Fang": true }), {"Jason": 1, "Karima": undefined, "Fang": 2})
  });
});
