'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/rows', async function (request, reply) {
    return { sami: true }
  })
}
