const TerserPlugin = require("terser-webpack-plugin");

module.exports = function terserPlugin(options) {
  return new TerserPlugin(options);
};
