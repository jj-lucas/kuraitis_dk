const { gql } = require('apollo-server-express')

const typeDefs = gql`
	type Book {
		title: String
		author: String
	}

	type Permission {
		id: String!
		name: String!
	}

	type Result {
		message: String!
	}

	type User {
		id: String!
		name: String!
		email: String!
		permissions: [Permission]!
	}

	type NationalizedString {
		da: String
		en: String
	}

	type ProductImages {
		parallax: String
	}
	type ProductBreadcrumbs {
		label: String!
		url: String!
	}
	type Product {
		images: ProductImages!
		breadcrumbs: [ProductBreadcrumbs!]!
		title: String!
	}

	type Variation {
		id: ID!
		code: String!
		variationOptions: [VariationOption]!
	}

	type VariationOption {
		id: ID!
		code: String!
	}

	type Query {
		books: [Book]
		hello(name: String!, amount: Int): String

		users: [User]!
		currentUser: User

		permissions: [Permission]!

		review: NationalizedString

		product(lang: String!): Product

		variations: [Variation]
	}

	type Mutation {
		createUser(name: String!, email: String!, password: String!): User
		deleteUser(id: String!): Result

		signIn(email: String!, password: String!): User
		signOut: Result

		createPermission(name: String!): Permission
		deletePermission(id: String!): Result
		assignPermission(userId: String!, permissionName: String!): Result
		unassignPermission(userId: String!, permissionName: String!): Result

		createVariation(code: String!): Variation
		deleteVariation(id: String!): Result
		createVariationOption(code: String!, variationId: String!): VariationOption
		deleteVariationOption(id: String!): Result
	}
`

export default typeDefs
