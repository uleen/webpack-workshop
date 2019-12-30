const { fileLoader, urlLoader } = require("../Loaders");

module.exports = function loadImagesPart(options) {
  return {
    module: {
      rules: [
        {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          use: [urlLoader(options)]
        },
        {
          test: /\.svg$/,
          use: fileLoader({})
        }
      ]
    }
  };
};
