import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { HomePageQuery } from '../../graphql-types'

const IndexPage: React.FC<PageProps<HomePageQuery>> = ({ data }) => (
	<h1>
		Hejsa
		{data.site?.siteMetadata?.title}
		<ul>
			{data.kuraitis.books?.map(book => (
				<li key={book?.title}>{book?.author}</li>
			))}
		</ul>
	</h1>
)

export default IndexPage

export const pageQuery = graphql`
	query HomePage {
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
