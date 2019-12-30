module.exports = function generateSourceMaps({ type }) {
  return {
    devtool: type
  };
};
