const divide = require("./divide");

test("Division by zero", () => {
  expect(() => divide(5, 0)).toThrow("ERROR: DIVISION BY 0");
});
