const { test } = require('node:test');
const assert = require('node:assert');

test('object equality', () => {
  const user = { id: 1, name: 'Kai' };
  assert.deepStrictEqual(user, { id: 1, name: 'Kai' });
});

test('array length', () => {
  const nums = [1, 2, 3, 4];
  assert.equal(nums.length, 4);
});

test('throws expected error', () => {
  function bad() {
    throw new Error('oops');
  }
  assert.throws(() => bad(), /oops/);
});

test('promise resolves', async () => {
  const p = Promise.resolve('done');
  const result = await p;
  assert.equal(result, 'done');
});

test('number comparison', () => {
  const a = 10;
  const b = 5;
  assert.ok(a > b);
});
