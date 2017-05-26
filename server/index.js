import path from 'path'
import express from 'express'
import webpack from 'webpack'
import config from '../webpack.config'

import { render } from '../src/server'

const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  },
  historyApiFallback: true
}))

app.use(require('webpack-hot-middleware')(compiler))

app.use(express.static('dist'))

app.use(async (req, res) => {
  const { body } = await render()
  res.status(200).send(body)
})

export default app
