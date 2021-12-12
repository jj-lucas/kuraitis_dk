require('dotenv').config({ path: '.env' })

import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import express from 'express'
import http from 'http'
import typeDefs from './type-defs'
import resolvers from './resolvers'

async function startServer(typeDefs, resolvers) {
	const app = express()
	const httpServer = http.createServer(app)
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	})

	// METRICS

	// CORS

	// PRISMA

	// BODY PARSER

	app.get('/hello', (req, res) => {
		res.send('Hello World!')
	})

	// Populate user

	// Health check

	await server.start()

	// mount Apollo middleware
	server.applyMiddleware({ app })

	await new Promise<void>(resolve => httpServer.listen({ port: process.env.PORT }, resolve))

	console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
}

startServer(typeDefs, resolvers)
