import express from 'express';

import { render } from '../src/server'

const app = express();

app.use(express.static('dist'));

app.use(async (req, res) => {
  const { body } = await render()
  res.status(200).send(body)
})

export default app