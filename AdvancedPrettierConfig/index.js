function helloWorld() {
  console.log("Hello, world!");
}
helloWorld();

a = 2;
b = 4;
function add(a, b) {
  console.log(a, "+", b, "=", a + b);
}
add(a, b);

function greet(name) {
  console.log("Hi, " + name);
}
greet("Alice");

const longString =
  "This is a very long string that definitely exceeds the eighty characters printWidth limit set in the Prettier configuration file so it should be wrapped.";

console.log(longString);

const firstObj = { foo: 1, bar: 2, baz: 3 };

const arrowFunc = (x) => {
  return x * x;
};

console.log(firstObj);
console.log(arrowFunc);

function messyFunction(x, y) {
  console.log(x + y);
}

messyFunction(3, 5);
