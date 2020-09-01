const path = require("path");

module.exports = {
  // Entry point to project is this file - start from here - get all of our JS files
  entry: "./src/index.js",
  output: {
    // Combine them into a file called App.js which reside in this folder - dist = distributable
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },

  // Configuration for development server
  devServer: {
    // Launch our app from this folder on port 9000
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },
  mode: "development",
  devtool: "source-map"
};
