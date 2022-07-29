import { Context } from '../index'
import { Resolvers } from '../generated/graphql'
const bcrypt = require('bcryptjs')
import { hasPermissions } from '../utils/server'

const resolvers: Resolvers = {
	Query: {
		variations: async (_, args, ctx: Context) => {
			hasPermissions(ctx, 'ADMIN')

			const variations = await ctx.prisma.variation.findMany({
				include: {
					variationOptions: true,
				},
			})
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
				include: {
					variationOptions: true,
				},
			})

			return variation
		},

		deleteVariation: async (_, { id }, ctx: Context) => {
			hasPermissions(ctx, 'ADMIN')

			// TODO delete all SKUs that use this variation
			// TODO delete all variation options related to this variation

			await ctx.prisma.variation.delete({
				where: {
					id,
				},
			})

			return {
				message: 'Success',
			}
		},

		createVariationOption: async (_, { code, variationId }, ctx: Context) => {
			hasPermissions(ctx, 'ADMIN')

			const variationOption = await ctx.prisma.variationOption.create({
				data: {
					variationId,
					code: code.toUpperCase().replace(/\s/g, ''),
				},
			})

			return variationOption
		},

		deleteVariationOption: async (_, { id }, ctx: Context) => {
			hasPermissions(ctx, 'ADMIN')

			await ctx.prisma.variationOption.delete({
				where: {
					id,
				},
			})

			return {
				message: 'Success',
			}
		},
	},
}

export default resolvers
