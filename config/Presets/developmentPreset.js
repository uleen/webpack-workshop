const {
  devServerPart,
  loadCssPart,
  loadImagesPart,
  generateSourceMapsPart
} = require("../Parts");
const merge = require("webpack-merge");

module.exports = function developmentPreset({ path }) {
  return merge([
    {
      entry: ["react-hot-loader/patch", path.index],
      output: {
        chunkFilename: "[name].[chunkhash:4].js",
        path: path.dist,
        filename: "[name].[hash].js"
      },
      resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts"],
        alias: {
          "react-dom": "@hot-loader/react-dom"
        }
      }
    },
    devServerPart({
      contentBase: path.dist,
      host: process.env.HOST,
      port: process.env.PORT,
      overlay: true
    }),
    loadCssPart(),
    loadImagesPart({ limit: 15000, prefix: "assets" }),
    generateSourceMapsPart({ type: "cheap-module-eval-source-map" })
  ]);
};
