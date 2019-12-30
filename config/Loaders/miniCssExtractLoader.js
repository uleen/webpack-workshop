const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function miniCssExtractLoader(options) {
  return {
    loader: MiniCssExtractPlugin.loader,
    options
  };
};
