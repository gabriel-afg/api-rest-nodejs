import fastify from 'fastify'
import { env } from './env'
import { transactionRoutes } from './routes/transactions'
import Cookie from '@fastify/cookie'

const app = fastify()

app.register(Cookie)

app.register(transactionRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('listening on port 3333')
  })
