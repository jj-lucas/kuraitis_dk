import { ExpressContext } from 'apollo-server-express'
import { PrismaClient } from '@prisma/client'
import { Resolvers } from '../generated/graphql'
const bcrypt = require('bcryptjs')

interface Context extends ExpressContext {
	prisma: PrismaClient
}

const resolvers: Resolvers = {
	Query: {
		users: async (parent, args, ctx: Context) => {
			const users = await ctx.prisma.user.findMany()
			return users
		},
	},
	Mutation: {
		userCreate: async (parent, { name, email, password }, ctx: Context) => {
			email = email.toLowerCase()
			console.log(email)

			// hash the password
			password = await bcrypt.hash(password, 10)

			const user = await ctx.prisma.user.create({
				data: { name, email, password },
			})

			return user
		},
	},
}

export default resolvers
