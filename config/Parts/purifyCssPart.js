const { purifyCssPlugin } = require("../Plugins");

module.exports = function purifyCssPart({ paths }) {
  return {
    plugins: [purifyCssPlugin({ path })]
  };
};
