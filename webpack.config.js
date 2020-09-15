module.exports = {
  mode: "development",
  entry: {
    content: "./src/content.js",
    popup: "./src/popup.js",
    background: "./src/background.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
  },
};
