const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        include: [
          path.resolve(__dirname, "src/assets"),
          path.resolve(
            __dirname,
            "node_modules",
            "@artichokeruby/logo/optimized"
          ),
          path.resolve(
            __dirname,
            "node_modules",
            "@artichokeruby/logo/favicons"
          ),
        ],
        type: "asset/resource",
        generator: {
          filename: "[name][ext]",
        },
      },
    ],
  },
};
