const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: 'dist',
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    library: 'redux-search'
  },
  externals: {
    'highlight.js': {
      commonjs2: 'highlight.js'
    },
    react: {
      commonjs2: 'react'
    },
    'react-dom': {
      commonjs2: 'react-dom'
    }
  },
  plugins: [
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules&importLoaders=1', 'cssnext'],
        exclude: path.join(__dirname, 'node_modules')
      }
    ]
  }
}
