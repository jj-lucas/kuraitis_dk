import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { StaticPageQuery } from '../../graphql-types'
import { StaticQueryComponent, ApolloQueryComponent } from '../components'

const IndexPage: React.FC<PageProps<StaticPageQuery>> = ({ data }) => (
	<>
		<h1>Hejsa</h1>
		{data.site?.siteMetadata?.title}
		<ul>
			{data.kuraitis.books?.map(book => (
				<li key={book?.title}>{book?.author}</li>
			))}
		</ul>
		<StaticQueryComponent />
		<ApolloQueryComponent />
	</>
)

export default IndexPage

export const pageQuery = graphql`
	query StaticPage {
		site {
			siteMetadata {
				title
			}
		}
		kuraitis {
			books {
				author
				title
			}
		}
	}
`
