const CopyWebpackPlugin = require("copy-webpack-plugin");

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["..\\public"],
  webpackFinal: (config) => {
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
