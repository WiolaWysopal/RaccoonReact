const camelcaseVariableNames = require("./eslint-rules/camelcase-variable-names");

module.exports = [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      local: {
        rules: {
          "camelcase-variable-names": camelcaseVariableNames,
        },
      },
    },
    rules: {
      "local/camelcase-variable-names": "error",
      "no-unused-vars": "warn",
      semi: ["error", "always"],
    },
  },
];
