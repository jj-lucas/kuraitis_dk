import { Context } from '../index'
import { Resolvers } from '../generated/graphql'
const bcrypt = require('bcryptjs')
import { generateJWT } from '../utils/jwt'
import { hasPermissions } from '../utils/server'

const resolvers: Resolvers = {
	Query: {
		users: async (parent, args, ctx: Context) => {
			const users = await ctx.prisma.user.findMany()
			return users
		},
		currentUser: async (parent, args, ctx: Context) => {
			if (!ctx.req.user) {
				return null
			}

			return ctx.req.user
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
		userDelete: async (parent, { id }, ctx: Context) => {
			hasPermissions(ctx, 'ADMIN')

			// ensure we are not suiciding
			if (id === ctx.req.user.id) {
				throw new Error("You can't delete yourself, dummy")
			}

			const user = await ctx.prisma.user.delete({
				where: {
					id,
				},
			})

			return {
				message: 'Success',
			}
		},

		signIn: async (parent, { email, password }, ctx: Context) => {
			// check if there is a user with that email
			const user = await ctx.prisma.user.findUnique({
				where: {
					email: email.toLowerCase(),
				},
			})

			if (!user) {
				throw new Error('Invalid email or password')
			}

			const passwordMatch = await bcrypt.compare(password, user.password)

			if (!passwordMatch) {
				throw new Error('Invalid email or password')
			}

			// generate a JWT token
			generateJWT(user, ctx)

			// return the user
			return user
		},
		signOut: async (parent, {}, ctx: Context) => {
			ctx.res.clearCookie('token')
			return {
				message: 'Goodbye',
			}
		},
	},
}

export default resolvers
