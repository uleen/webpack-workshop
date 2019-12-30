const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");

const {
  basePreset,
  developmentPreset,
  productionPreset
} = require("./Presets/");

const PATHS = {
  app: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  index: path.join(__dirname, "../src/index.tsx")
};

module.exports = mode => {
  if (mode === "production") {
    return merge(
      basePreset({
        path: PATHS
      }),
      productionPreset({
        path: PATHS
      }),
      { mode }
    );
  }

  return merge(
    basePreset({
      path: PATHS
    }),
    developmentPreset({
      path: PATHS
    }),
    { mode }
  );
};
