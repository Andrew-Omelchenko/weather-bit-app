const path = require('path');

module.exports = {
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // module: {
  //   rules: [{
  //       test: /\.scss$/,
  //       use: ExtractTextPlugin.extract({
  //           fallback: "style-loader",
  //           use: "css-loader" [{
  //               loader: "css-loader" // translates CSS into CommonJS
  //           }, {
  //               loader: "sass-loader" // compiles Sass to CSS
  //           }]
  //       })
  //   }]
  // },
  // plugins: [
  //   new ExtractTextPlugin("styles.css"),
  // ]
}