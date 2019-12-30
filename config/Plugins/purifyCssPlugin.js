const PurifyCSSPlugin = require("purifycss-webpack");

module.exports = function purifyCssPlugin(options) {
  return new PurifyCSSPlugin(options);
};
