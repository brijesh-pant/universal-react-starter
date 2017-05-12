#!/usr/bin/env node

require('babel-register')({
  presets: ['react', 'es2015-node5', 'stage-0'],
  plugins: ['add-module-exports']
})

const server = require('../server')

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.info(`Server is running! at http://localhost:${port}`);
})