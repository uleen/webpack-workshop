const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const cssnano = require("cssnano");

module.exports = function optimizeCSSAssetsPlugin({ options }) {
  return new OptimizeCSSAssetsPlugin({
    cssProcessor: cssnano,
    cssProcessorOptions: options,
    canPrint: false
  });
};
