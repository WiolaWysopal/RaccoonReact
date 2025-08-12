const fetchData = require("./fetchData");

test("works correct with async/await", async () => {
  const data = await fetchData();
  expect(data).toEqual({ message: "Hello World!" });
});

test("works correct with .resolves", () => {
  return expect(fetchData()).resolves.toEqual({ message: "Hello World!" });
});
