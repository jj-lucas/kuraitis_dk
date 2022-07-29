import { ExpressContext } from 'apollo-server-express'
import { PrismaClient } from '@prisma/client'
import { Resolvers } from '../generated/graphql'
import userResolvers from './user'
import variationResolvers from './variation'
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

const resolvers = merge.all([
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

			product: async (_, args, ctx: Context) => {
				console.log(args)
				return {
					images: {
						parallax:
							'https://previews.123rf.com/images/mtoome/mtoome1609/mtoome160900099/63492873-leather-handbag-craftsman-at-work-in-a-workshop.jpg',
					},
					breadcrumbs: [
						{
							label: 'Lorem',
							url: '/lorem',
						},
						{
							label: 'Ipsum',
							url: '/ipsum',
						},
					],
					title: 'Lorem ipsum dolors',
				}
			},
		},
		Mutation: {},
	} as Resolvers,
	userResolvers,
	variationResolvers,
])

export default resolvers
