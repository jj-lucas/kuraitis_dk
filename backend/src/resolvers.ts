import { Context } from './index'

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

const resolvers = {
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
