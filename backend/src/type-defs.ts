const { gql } = require('apollo-server-express')

const typeDefs = gql`
	type Book {
		title: String
		author: String
	}

	type Query {
		books: [Book]
		hello(name: String!, amount: Int): String
	}
`

export default typeDefs
