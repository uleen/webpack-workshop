const { babelLoader } = require("../Loaders");

module.exports = function loadTypeScriptPart({ include, exclude, options }) {
  return {
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          include,
          exclude,
          use: [babelLoader(options)]
        }
      ]
    }
  };
};
