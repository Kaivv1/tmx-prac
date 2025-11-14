const { test } = require('node:test');
const assert = require('node:assert');

test('math works', () => {
  assert.equal(1 + 1, 2);
});

test('truthy check', () => {
  assert.ok(true);
});

test('string contains substring', () => {
  assert.ok('hello world'.includes('hello'));
});

test('array contains element', () => {
  const arr = ['apple', 'banana', 'orange'];
  assert.ok(arr.includes('banana'));
});
