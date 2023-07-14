const webpackBase = require("../webpack.dev");
const CopyWebpackPlugin = require("copy-webpack-plugin");

/** @type { import('@storybook/web-components-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/web-components-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: (config) => {
    const webpackConfig = webpackBase();
    config.module.rules.push(...webpackConfig.module.rules);
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "node_modules/design-tokens/dist/css/globals.css",
            to: "tokens/globals.css",
          },
          {
            from: "**/**/*.css",
            context: "node_modules/design-tokens/dist/css",
            to: "tokens/[path]/[name][ext]",
          },
        ],
      })
    );
    return config;
  },
};
export default config;
