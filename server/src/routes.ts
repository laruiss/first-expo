import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify"

async function routes (fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => ({ msg: 'Hello from the API' }))
}


export default routes