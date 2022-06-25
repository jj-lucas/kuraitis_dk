import React from 'react'
import { useApolloQuery, ApolloQueryVariables } from '../../graphql-queries'

const ApolloQueryComponent: React.FC = () => {
	// query defined at src/graphql-queries/Apollo.gql
	const variables: ApolloQueryVariables = {
		name: 'Lucas',
	}
	const { data, loading } = useApolloQuery({ variables })

	if (loading) {
		return <p>Loading</p>
	}

	return <h1>{data?.hello}</h1>
}

export { ApolloQueryComponent }
