const pathVariable = require("path");

module.exports = {
  entry: "./src/index.js", // punkt wejścia
  output: {
    filename: "main.js", // nazwa wygenerowanego pliku
    path: pathVariable.resolve(__dirname, "dist"), // folder wyjściowy
  },
  mode: "development", // tryb development
};
