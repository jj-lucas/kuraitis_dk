require('dotenv').config({ path: '.env' })

import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import express from 'express'
import http from 'http'
import typeDefs from './type-defs'
import resolvers from './resolvers'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'
import { ExpressContext } from 'apollo-server-express'
const cookieParser = require('cookie-parser')

const prisma = new PrismaClient()

export interface Req extends express.Request {
	userId?: string
}

export interface Context extends ExpressContext {
	prisma: PrismaClient
	req: Req
}

interface Cookies extends jwt.JwtPayload {
	userId?: string
}

async function startServer(typeDefs, resolvers) {
	const app = express()

	app.use(cookieParser())

	const httpServer = http.createServer(app)
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
		context: req => ({ ...req, prisma }),
	})

	// METRICS

	// https://stackoverflow.com/a/67270036
	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))

	// Populate user
	app.use(async (req: Req, res, next) => {
		const { token }: { token?: string } = req.cookies
		if (token) {
			try {
				const decoded = jwt.verify(token, process.env.APP_SECRET) as Cookies

				if (decoded && decoded.userId) {
					// put the user Id onto the req for future requests to access
					req.userId = decoded.userId
				}
			} catch (e) {
				// do nothing, malformed JWT token
			}
		}
		next()
	})

	app.get('/hello', (req, res) => {
		res.send('Hello World!')
	})

	// Health check

	await server.start()

	// CORS
	server.applyMiddleware({
		app,
		cors: {
			credentials: true,
			origin: (origin, callback) => {
				let whitelist = [
					process.env.FRONTEND_URL_PROD,
					'https://checkout.stripe.com/',
					'https://studio.apollographql.com',
				]
				if (process.env.NODE_ENV !== 'production') {
					whitelist.push(process.env.FRONTEND_URL_LOCAL, `http://localhost:${process.env.PORT}`)
				}

				if (whitelist.indexOf(origin) !== -1 || !origin) {
					callback(null, true)
				} else {
					callback(new Error(`Not allowed by CORS: ${origin}`))
				}
			},
		},
	})

	// mount Apollo middleware
	server.applyMiddleware({ app })

	await new Promise<void>(resolve => httpServer.listen({ port: process.env.PORT }, resolve))

	console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
}

startServer(typeDefs, resolvers)
