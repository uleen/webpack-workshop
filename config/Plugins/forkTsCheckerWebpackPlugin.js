const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = function forkTsCheckerWebpackPlugin(options) {
  return new ForkTsCheckerWebpackPlugin(options);
};
