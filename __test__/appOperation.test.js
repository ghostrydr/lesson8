const appOperations = require('../src/appOperations');

test('multiplication property of zero', () => {
  expect(appOperations.multiply(5, 0)).toBe(0);
});

test('add two values', () => {
  expect(appOperations.add(5, 5)).toBe(10);
});

test('subtract two values', () => {
  expect(appOperations.subtract(15, 5)).toBe(10);
});

test('divide two values', () => {
  expect(appOperations.divide(15, 5)).toBe(3); 
});
