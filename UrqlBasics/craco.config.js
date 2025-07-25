module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Znajdź source-map-loader i go usuń
      webpackConfig.module.rules = webpackConfig.module.rules.map((rule) => {
        if (Array.isArray(rule.oneOf)) {
          rule.oneOf = rule.oneOf.filter(
            (loader) =>
              !(loader.loader && loader.loader.includes("source-map-loader")),
          );
        }
        return rule;
      });

      return webpackConfig;
    },
  },
};
