// eslint.config.js (flat config, z languageOptions)
module.exports = [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      // Twoje zasady ESLint tutaj
      "no-unused-vars": "warn",
      semi: ["error", "always"],
    },
  },
];
