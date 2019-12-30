const { terserPlugin } = require("../Plugins");

module.exports = function minifyJavaScriptPart() {
  return {
    optimization: {
      minimizer: [terserPlugin({ sourceMap: true })]
    }
  };
};
