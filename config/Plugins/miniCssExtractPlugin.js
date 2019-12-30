const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function miniCssExtractPlugin(options) {
  return new MiniCssExtractPlugin(options);
};
