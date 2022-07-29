import { Context } from '../index'
import { Resolvers } from '../generated/graphql'
const bcrypt = require('bcryptjs')
import { hasPermissions } from '../utils/server'

const resolvers: Resolvers = {
	Query: {
		variations: async (_, args, ctx: Context) => {
			hasPermissions(ctx, 'ADMIN')

			const variations = await ctx.prisma.variation.findMany()
			return variations
		},
	},
	Mutation: {
		createVariation: async (_, { code }, ctx: Context) => {
			hasPermissions(ctx, 'ADMIN')

			const variation = await ctx.prisma.variation.create({
				data: {
					code: code.toUpperCase().replace(/\s/g, ''),
				},
			})

			return variation
		},
	},
}

export default resolvers
