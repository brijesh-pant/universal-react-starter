#!/usr/bin/env node

/* eslint-disable no-console */

// Bootstrap babel-register
require('../babel.server')

const server = require('../server')

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.info(`Server is running! at http://localhost:${ port }`)
})
