const { forEach } = require('../index');
const assert = require('assert');

it('should sum array', () => {
  const numbers = [1, 2, 3];

  let total = 0;

  forEach(numbers, value => {
    total += value;
  });

  assert.strictEqual(total, 6);
});
