import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticComponentQuery } from '../../../graphql-types'

const StaticQueryComponent: React.FC = () => {
	const { site } = useStaticQuery<StaticComponentQuery>(graphql`
		query StaticComponent {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)
	return <h1>{site?.siteMetadata?.title}</h1>
}

export { StaticQueryComponent }
