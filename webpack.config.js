const path = require('path')

const config = {
  entry: {
    app: './src/client.js'
  },
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
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
          ], 'stage-0']
        },
        include: path.join(__dirname, 'src')
      }
    ]
  },
  devtool: 'inline-source-map'
}

module.exports = config