const { gql } = require('apollo-server-express')

const typeDefs = gql`
	type Book {
		title: String
		author: String
	}

	type User {
		id: String
		name: String
		email: String
	}

	type Query {
		books: [Book]
		hello(name: String!, amount: Int): String
		users: [User]
	}

	type Mutation {
		userCreate(name: String!, email: String!, password: String!): User
	}
`

export default typeDefs
