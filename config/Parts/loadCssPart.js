const { styleLoader, cssLoader } = require("../Loaders");

module.exports = function loadCssPart(options) {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            styleLoader({
              injectType: "singletonStyleTag"
            }),
            cssLoader(options)
          ]
        }
      ]
    }
  };
};
