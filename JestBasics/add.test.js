const add = require("./add");

test("Add two natural numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("Add two natural numbers", () => {
  expect(add(1, 2)).toBe(3);
});

// Test that can't pass on purpose to see how jest console works
// test('Add two natural numbers', () => { expect(add(3, 4)).toBe(4) });
