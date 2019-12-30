const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = function cleanPlugin(options) {
  return new CleanWebpackPlugin(options);
};
