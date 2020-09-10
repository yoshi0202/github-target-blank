module.exports = {
  mode: "development",
  entry: {
    content: "./src/content.js",
    popup: "./src/popup.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
  },
};
