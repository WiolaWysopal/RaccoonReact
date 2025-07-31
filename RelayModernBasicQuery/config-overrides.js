module.exports = function override(config, env) {
  config.module.rules[1].oneOf.forEach((rule) => {
    if (rule.options && rule.options.plugins) {
      rule.options.plugins.push("relay");
    }
  });
  return config;
};
