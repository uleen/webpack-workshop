const cleanPlugin = require("./cleanPlugin");
const contextReplacementPlugin = require("./contextReplacementPlugin");
const forkTsCheckerWebpackPlugin = require("./forkTsCheckerWebpackPlugin");
const htmlWebpackPlugin = require("./htmlWebpackPlugin");
const miniCssExtractPlugin = require("./miniCssExtractPlugin");
const optimizeCssAssetsPlugin = require("./optimizeCssAssetsPlugin");
const purifyCssPlugin = require("./purifyCssPlugin");
const terserPlugin = require("./terserPlugin");

module.exports = {
  cleanPlugin,
  contextReplacementPlugin,
  forkTsCheckerWebpackPlugin,
  htmlWebpackPlugin,
  miniCssExtractPlugin,
  optimizeCssAssetsPlugin,
  purifyCssPlugin,
  terserPlugin
};
