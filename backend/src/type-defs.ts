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

	type Query {
		books: [Book]
		hello(name: String!, amount: Int): String

		users: [User]!
		currentUser: User

		permissions: [Permission]!
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
	}
`

export default typeDefs
