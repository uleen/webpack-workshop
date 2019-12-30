const { loadTypeScriptPart, loadFontsPart, statsPart } = require("../Parts");
const {
  forkTsCheckerWebpackPlugin,
  contextReplacementPlugin,
  htmlWebpackPlugin
} = require("../Plugins");
const merge = require("webpack-merge");

module.exports = function basePreset({ path }) {
  return merge([
    {
      plugins: [
        forkTsCheckerWebpackPlugin(),
        contextReplacementPlugin(/moment[\/\\]locale$/, /en/),
        htmlWebpackPlugin({
          template: require("html-webpack-template"),
          inject: false,
          appMountId: "app"
        })
      ]
    },
    loadTypeScriptPart({
      include: path.app,
      exclude: /node_modules/
    }),
    loadFontsPart({ limit: 15000, prefix: "assets" }),
    statsPart({
      all: false,
      assets: true,
      assetsSort: "!size",
      cachedAssets: false,
      children: false,
      colors: true,
      entrypoints: false,
      env: true
    })
  ]);
};
