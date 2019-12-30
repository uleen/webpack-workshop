const { optimizeCssAssetsPlugin } = require("../Plugins");
const cssnano = require("cssnano");

module.exports = function minifyCssPart({ options }) {
  plugins: [
    optimizeCssAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: options,
      canPrint: false
    })
  ];
};
