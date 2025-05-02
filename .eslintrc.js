// .eslintrc.js
const localRules = require("./eslint-rules");

module.exports = {
  root: true,
  plugins: ["local"],
  rules: {
    "local/camelcase-variable-names": "error",
  },
  settings: {},
  defineConfig: {
    plugins: [
      {
        rules: localRules.rules,
      },
    ],
  },
};
