const utils = require("./utils");

function processRandomNumber() {
  const num = utils.getRandomNumber();
  return num * 2;
}

module.exports = { processRandomNumber };
