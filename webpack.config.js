const path = require('path');

module.exports = {
  entry: '.',
  output: {
    filename: 'vue-mqtt.js',
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
