const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const srcPath = path.resolve(__dirname, "./src/"); 
const htmlPlugin = new HtmlWebPackPlugin({
  template: `${srcPath}/index.html`,
  filename: "./index.html"
});


module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [htmlPlugin]
};