const { processRandomNumber } = require("./main");
const utils = require("./utils");

test("processRandomNumber works corretly with mock", () => {
  jest.spyOn(utils, "getRandomNumber").mockReturnValue(5);

  const result = processRandomNumber();
  expect(result).toBe(10);

  utils.getRandomNumber.mockRestore();
});
