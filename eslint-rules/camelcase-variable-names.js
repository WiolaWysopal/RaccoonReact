module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "enforce camelCase variable names",
    },
    schema: [], // brak opcji
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        const camelName = node.id.name;
        if (camelName && !/^[a-z]+[A-Z][a-zA-Z0-9]*$/.test(camelName)) {
          context.report({
            node,
            message: `Variable name "${camelName}" should be in camelCase.`,
          });
        }
      },
    };
  },
};
