const { gql } = require('apollo-server-express')

const typeDefs = gql`
	type Book {
		title: String
		author: String
	}

	type User {
		email: String!
		name: String
	}

	type Query {
		books: [Book]
		hello(name: String!, amount: Int): String
		users: [User]
	}
`

export default typeDefs
