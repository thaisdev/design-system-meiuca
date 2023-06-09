const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./src/index.js"],
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: false,
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "sass-to-string",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
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
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "components/[name].js",
    libraryTarget: "umd",
    library: "dsc-design-system-core",
  },
};
