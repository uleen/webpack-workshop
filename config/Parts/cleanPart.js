const { cleanPlugin } = require("../Plugins");

module.exports = function cleanPart(options) {
  return {
    plugins: [cleanPlugin(options)]
  };
};
