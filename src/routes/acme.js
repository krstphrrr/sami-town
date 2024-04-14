'use strict'
const fs = require('fs')

module.exports = async function (fastify, opts) {
  fastify.get('/.well-known/acme-challenge/:file', async function (request, reply) {
    let stream = fs.createReadStream(
        path.join(__dirname + '/ssl/.well-known/acme-challenge/' + req.params.file)
      )
      res.type('text/html').send(stream)
  })
}
