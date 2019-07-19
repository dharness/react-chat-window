const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './demo/src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'demo/dist')
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      }
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif|mp3)$/,
      use: [
        'file-loader'
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'demo/assets/index-template.html'
    })
  ]
}
