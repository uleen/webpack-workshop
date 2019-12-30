const webpack = require("webpack");

module.exports = function contextReplacementPluginPlugin(sRegExpr) {
  return new webpack.ContextReplacementPlugin(sRegExpr);
};
