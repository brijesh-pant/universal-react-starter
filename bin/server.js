#!/usr/bin/env node

require('babel-register')({
  presets: ['react', 'es2015-node5', 'stage-0'],
  plugins: ['add-module-exports']
})

const server = require('../server')

server.listen(3000, () => {
  console.info('Server is running! at http://localhost:3000')
})