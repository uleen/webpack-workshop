const cleanPart = require("./cleanPart");
const devServerPart = require("./devServerPart");
const extractCssPart = require("./extractCssPart");
const generateSourceMapsPart = require("./generateSourceMapsPart");
const loadCssPart = require("./loadCssPart");
const loadFontsPart = require("./loadFontsPart");
const loadImagesPart = require("./loadImagesPart");
const loadTypeScriptPart = require("./loadTypeScriptPart");
const minifyCssPart = require("./minifyCssPart");
const minifyJavaScriptPart = require("./minifyJavaScriptPart");
const optimizationPart = require("./optimizationPart");
const purifyCssPart = require("./purifyCssPart");
const statsPart = require("./statsPart");

module.exports = {
  cleanPart,
  devServerPart,
  extractCssPart,
  generateSourceMapsPart,
  loadCssPart,
  loadFontsPart,
  loadImagesPart,
  loadTypeScriptPart,
  minifyCssPart,
  minifyJavaScriptPart,
  optimizationPart,
  purifyCssPart,
  statsPart
};
