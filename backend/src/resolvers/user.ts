import { Context } from '../index'
import { Resolvers } from '../generated/graphql'
const bcrypt = require('bcryptjs')
import { generateJWT } from '../utils/jwt'

const resolvers: Resolvers = {
	Query: {
		users: async (parent, args, ctx: Context) => {
			const users = await ctx.prisma.user.findMany()
			return users
		},
		currentUser: async (parent, args, ctx: Context) => {
			if (!ctx.req.userId) {
				return null
			}

			const user = await ctx.prisma.user.findUnique({
				where: {
					id: ctx.req.userId,
				},
				include: {
					permissions: true,
				},
			})

			return user
		},
	},
	Mutation: {
		userCreate: async (parent, { name, email, password }, ctx: Context) => {
			email = email.toLowerCase()

			// hash the password
			password = await bcrypt.hash(password, 10)

			const user = await ctx.prisma.user.create({
				data: { name, email, password },
			})

			return user
		},
		signIn: async (parent, { email, password }, ctx: Context) => {
			// check if there is a user with that email
			const user = await ctx.prisma.user.findUnique({
				where: {
					email: email.toLowerCase(),
				},
			})

			const passwordMatch = await bcrypt.compare(password, user.password)

			if (!passwordMatch) {
				throw new Error('Invalid email or password')
			}

			// generate a JWT token
			generateJWT(user, ctx)

			// return the user
			return user

			return null
		},
	},
}

export default resolvers
