const path = require('path');

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    filename: 'vue-mqttsocket.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devtool: "source-map"
};
