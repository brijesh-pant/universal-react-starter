const path = require('path')
const webpack = require('webpack')

const config = {
  entry: {
    app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      'react-hot-loader/patch',
      './src/client.js'
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', [
            'es2015',
            {
              modules: false
            }
          ], 'stage-0'],
          plugins: ['react-hot-loader/babel']
        },
        include: path.join(__dirname, 'src')
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

module.exports = config
