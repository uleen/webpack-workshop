const { cssLoader, miniCssExtractLoader } = require("../Loaders");
const { miniCssExtractPlugin } = require("../Plugins");

module.exports = function extractCssPart() {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [miniCssExtractLoader(), cssLoader()]
        }
      ]
    },
    plugins: [
      miniCssExtractPlugin({
        filename: "[name].[contenthash:4].css",
        chunkFilename: "[id].[hash].css"
      })
    ]
  };
};
