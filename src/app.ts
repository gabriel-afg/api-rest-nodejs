import fastify from 'fastify'
import { transactionRoutes } from './routes/transactions'
import Cookie from '@fastify/cookie'

export const app = fastify()

app.register(Cookie)

app.register(transactionRoutes, {
  prefix: 'transactions',
})
