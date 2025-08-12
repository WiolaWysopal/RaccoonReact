function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Hello World!" });
    }, 500);
  });
}

module.exports = fetchData;
