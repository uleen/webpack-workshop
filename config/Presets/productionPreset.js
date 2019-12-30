const {
  cleanPart,
  extractCssPart,
  loadImagesPart,
  minifyJavaScriptPart,
  minifyCssPart,
  generateSourceMapsPart,
  optimizationPart,
  purifyCssPart
} = require("../Parts");
const merge = require("webpack-merge");
const glob = require("glob");

module.exports = function productionPreset({ path }) {
  return merge([
    {
      entry: [path.index],
      output: {
        chunkFilename: "[name].[chunkhash:4].js",
        path: path.dist,
        filename: "[name].[hash].js"
      },
      resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts"]
      }
    },
    optimizationPart({
      moduleIds: "hashed",
      runtimeChunk: {
        name: "manifest"
      },
      splitChunks: {
        minSize: 30000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all"
          }
        }
      }
    }),
    cleanPart(),
    extractCssPart(),
    purifyCssPart({
      paths: glob.sync(`${path.app}/**/*.js`, { nodir: true })
    }),
    loadImagesPart({ limit: 15000, prefix: "assets" }),
    generateSourceMapsPart({ type: "source-map" }),
    minifyJavaScriptPart(),
    minifyCssPart({
      options: {
        discardComments: {
          removeAll: true
        },
        safe: true
      }
    })
  ]);
};
