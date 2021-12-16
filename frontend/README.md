# Dev notes

## Approaches for querying data

### Page query

The name of the query is the one used by the `gatsby-plugin-graphql-codegen` to
generate types, based on the introspected schema of the API.

```
// pages/test.tsx

import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { TestQuery } from '../../graphql-types'

const Page: React.FC<PageProps<TestQuery>> = ({ data }) => {
	// data is typed
	return (<>{data.kuraitis.hello}</>)
}

export default Page

export const testQuery = graphql`
	# The query name will define the type name
	query Test {
		kuraitis {
			hello
		}
	}
`

```

### Static component query

Similar to page query. Uses a hook to run the query.

```
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { TestQuery } from '../../../graphql-types'

const ExampleComponent: React.FC = () => {
	const { site } = useStaticQuery<TestQuery>(graphql`
		query Test {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)
	// site is typed
	return <h1>{site?.siteMetadata?.title}</h1>
}

export { ExampleComponent }
```

### Apollo Client

For client side queries, the app uses `gatsby-plugin-apollo` to wrap the site
with an Apollo Client. Queries have to be defined in
`./src/graphql-queries/*.gql`.

We use `graphql-codegen` to generate types on the detected queries, based on the
type definitions of the backend relatively found at
`../backend/dist/type-defs.js`.

Generated types and hooks end up in `./src/graphql-queries/index.tsx`, and can
be imported from there. The name of the query defines the name of the types /
hooks.

```
// src/graphql-queries/Test.gql

query Test($name: String!, $amount: Int) {
	hello(name: $name, amount: $amount)
}


// src/components/Test.tsx

import React from 'react'
import { useTestQuery, TestQueryVariables } from '../../graphql-queries'

const TestQueryComponent: React.FC = () => {
	const variables: TestQueryVariables = {
		name: 'Lucas',
	}
	const { data, loading } = useTestQuery({ variables })

	if (loading) {
		return <p>Loading</p>
	}

	return <h1>{data?.hello}</h1>
}

export { TestQueryComponent }

```
