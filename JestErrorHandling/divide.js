function divide(a, b) {
  if (b == 0) {
    throw new Error("ERROR: DIVISION BY 0");
  }
  return a / b;
}

module.exports = divide;
