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

		hello: async (parent, { name, amount }, ctx) => {
			return `Hello ${name}: ${amount}`
		},
	},
}
export default resolvers
