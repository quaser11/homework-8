const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const { template } = require("lodash");

module.exports = {
  mode: "development",
  entry: {
    gallery: "./src/js/01-gallery.js",
    feedback: "./src/js/03-feedback.js",
    video: "./src/js/02-video.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].my-bundle.js",
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
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "feedback",
      filename: "03-feedback.html",
      template: "src/views/03-feedback.html",
      chunks: ["feedback"],
    }),
    new HtmlWebpackPlugin({
      title: "video",
      filename: "02-video.html",
      template: "src/views/02-video.html",
      chunks: ["video"],
    }),
    new HtmlWebpackPlugin({
      title: "gallery",
      filename: "index.html",
      template: "src/views/01-gallery.html",
      chunks: ["gallery"],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/partials/navigator.html"),
      location: "navigation",
      template_filename: ["index.html", "02-video.html", "03-feedback.html"],
    }),
    new MiniCssExtractPlugin({ filename: "css/[name].styles.css" }),
  ],
};
