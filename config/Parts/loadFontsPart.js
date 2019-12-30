const { urlLoader } = require("../Loaders");

module.exports = function loadFontsPart(options) {
  return {
    module: {
      rules: [
        {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          use: [urlLoader(options)]
        }
      ]
    }
  };
};
