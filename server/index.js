import express from 'express'
import webpack from 'webpack'
import config from '../webpack.config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import { render } from '../src/server'

const app = express()
const compiler = webpack(config)

if (process.env.NODE_ENV === 'development') {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    },
    historyApiFallback: true
  }))

  app.use(webpackHotMiddleware(compiler))
} else if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'))
}

app.use(async (req, res) => {
  const { body } = await render()
  res.status(200).send(body)
})

export default app
