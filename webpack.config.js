const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/03-feedback.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      { test: /\.hbs$/, loader: "handlebars-loader" },
    ],
  },
  devServer: {
    port: 8080,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/03-feedback.html" }),
    new MiniCssExtractPlugin({ filename: "css/styles.css" }),
  ],
};
