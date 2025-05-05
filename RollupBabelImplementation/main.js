const greetFunction = (nameVariable = "world") => {
  const messageVariable = `Hello, ${nameVariable}!`;
  console.log(messageVariable);
};

greetFunction();
