const path = require('path');
console.log(path.resolve(__dirname, 'public/assets/js'))
module.exports = {
  entry: './resources/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public/assets/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
}