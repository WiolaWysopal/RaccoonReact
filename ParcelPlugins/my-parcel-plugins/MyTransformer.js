// my-parcel-plugins/MyTransformer.js

const { Transformer } = require("@parcel/plugin");

module.exports = new Transformer({
  async transform({ asset }) {
    if (asset.type === "js") {
      let codeVariable = await asset.getCode();

      codeVariable = `// Bundled with custom plugin\n${codeVariable}`;

      asset.setCode(codeVariable);
    }

    return [asset];
  },
});
