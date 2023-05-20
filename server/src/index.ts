import Fastify from 'fastify'

import routes from './routes'

const fastify = Fastify({
  logger: true
})

fastify.register(routes, { prefix: 'api' })

// Run the server!
const start = async () => {
  try {
    const address = await fastify.listen({ host: '::', port: 3000 })
    fastify.log.info(`API listening on ${address}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
