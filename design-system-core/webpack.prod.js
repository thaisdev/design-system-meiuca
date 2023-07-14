const entries = require("./webpack_entries.json");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = () => {
  const prod = {
    entry: entries,
    mode: "production",
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    externals: [
      /lit/gi,
      /lit\/decorators/gi,
      /lit\/directives\/class-map/gi,
      /lit\/directives\/if-defined/gi,
      /design-assets/gi,
      /design-tokens/gi,
    ],
  };

  return merge(common, prod);
};
