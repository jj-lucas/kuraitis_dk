import { ExpressContext } from 'apollo-server-express'
import { PrismaClient } from '@prisma/client'
import { Resolvers } from './generated/graphql'

interface Context extends ExpressContext {
	prisma: PrismaClient
}

const books = [
	{
		title: 'The Awakening',
		author: 'Kate Chopin',
	},
	{
		title: 'City of Glass',
		author: 'Paul Auster',
	},
]

const resolvers: Resolvers = {
	Query: {
		books: () => books,

		hello: async (parent, { name, amount }) => {
			return `Hello ${name}: ${amount}`
		},

		users: async (parent, args, ctx: Context) => {
			const users = await ctx.prisma.user.findMany()
			return users
		},
	},
}
export default resolvers
