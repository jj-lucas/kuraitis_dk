import { Context } from '../index'
import { Resolvers } from '../generated/graphql'
const bcrypt = require('bcryptjs')
import { generateJWT } from '../utils/jwt'
import { hasPermissions } from '../utils/server'

const resolvers: Resolvers = {
	Query: {
		users: async (_, args, ctx: Context) => {
			hasPermissions(ctx, 'ADMIN')

			const users = await ctx.prisma.user.findMany({
				include: {
					permissions: true,
				},
			})
			return users
		},
		currentUser: async (_, args, ctx: Context) => {
			if (!ctx.req.user) {
				return null
			}

			return ctx.req.user
		},
		permissions: async (_, args, ctx: Context) => {
			hasPermissions(ctx, 'ADMIN')

			const permissions = await ctx.prisma.permission.findMany()

			return permissions
		},
	},
	Mutation: {
		createUser: async (_, { name, email, password }, ctx: Context) => {
			hasPermissions(ctx, 'ADMIN')

			email = email.toLowerCase()

			// hash the password
			password = await bcrypt.hash(password, 10)

			const user = await ctx.prisma.user.create({
				data: { name, email, password },
			})

			return user
		},
		deleteUser: async (_, { id }, ctx: Context) => {
			hasPermissions(ctx, 'ADMIN')

			// ensure we are not suiciding
			if (id === ctx.req.user.id) {
				throw new Error("You can't delete yourself, dummy")
			}

			await ctx.prisma.user.delete({
				where: {
					id,
				},
			})

			return {
				message: 'Success',
			}
		},

		signIn: async (_, { email, password }, ctx: Context) => {
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
		signOut: async (_, {}, ctx: Context) => {
			ctx.res.clearCookie('token')
			return {
				message: 'Goodbye',
			}
		},

		createPermission: async (_, { name }, ctx: Context) => {
			hasPermissions(ctx, 'ADMIN')

			const permission = await ctx.prisma.permission.create({
				data: {
					name: name.toUpperCase(),
				},
			})

			return permission
		},
		deletePermission: async (_, { id }, ctx: Context) => {
			hasPermissions(ctx, 'ADMIN')

			await ctx.prisma.permission.delete({
				where: {
					id,
				},
			})

			return {
				message: 'Success',
			}
		},
		assignPermission: async (_, { userId, permissionName }, ctx: Context) => {
			hasPermissions(ctx, 'ADMIN')

			const user = await ctx.prisma.user.findUnique({
				where: {
					id: userId,
				},
				include: {
					permissions: true,
				},
			})

			if (!user) {
				throw new Error('User not found')
			}

			if (!user.permissions.map(perm => perm.name).includes(permissionName)) {
				await ctx.prisma.user.update({
					where: {
						id: userId,
					},
					data: {
						permissions: {
							connect: {
								name: permissionName,
							},
						},
					},
				})
			}

			return {
				message: 'Success',
			}
		},
	},
}

export default resolvers
