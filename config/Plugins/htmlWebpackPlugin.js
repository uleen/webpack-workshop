const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function htmlWebpackPlugin(options) {
  return new HtmlWebpackPlugin(options);
};
