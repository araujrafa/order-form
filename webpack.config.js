

const path = require('path');

// import webpack plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: [
      './resources/js/index.js',
      './resources/sass/index.scss',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    filename: 'js/bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets:[ 'es2015', 'stage-2' ]
        },
      }
    ]
  },
}