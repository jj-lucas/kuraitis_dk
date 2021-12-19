const { gql } = require('apollo-server-express')

const typeDefs = gql`
	type Book {
		title: String
		author: String
	}

	type Permission {
		name: String
	}

	type Result {
		message: String
	}

	type User {
		id: String
		name: String
		email: String
		permissions: [Permission]
	}

	type Query {
		books: [Book]
		hello(name: String!, amount: Int): String
		users: [User]
		currentUser: User
	}

	type Mutation {
		userCreate(name: String!, email: String!, password: String!): User
		userDelete(id: String): Result
		signIn(email: String!, password: String!): User
		signOut: Result
	}
`

export default typeDefs
