import { ExpressContext } from 'apollo-server-express'
import { PrismaClient } from '@prisma/client'
import { Resolvers } from '../generated/graphql'
import userResolvers from './user'
const merge = require('deepmerge')

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

const resolvers = merge(
	{
		Query: {
			books: () => books,

			hello: async (parent, args, ctx: Context) => {
				return `Hello ${args.name}, ${args.amount} times!`
			},

			review: () => {
				return {
					da: 'I love this key organizer. Great craftsmanship & shipped pretty quickly. I would definitely purchase from Sergio again.',
				}
			},
		},
		Mutation: {},
	} as Resolvers,
	userResolvers
)

export default resolvers
