import ProductPage from '@/components/Site/ProductPage'
import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { ProductPageQuery } from '../../../../graphql-types'
import { ProductContext } from '@/contexts'

const Prototype: React.FC<PageProps<ProductPageQuery>> = ({ data }) => {
	const product = data.site?.siteMetadata?.mocks?.product
	if (!product) return null

	return (
		<ProductContext.Provider value={product}>
			<ProductPage />
		</ProductContext.Provider>
	)
}

export default Prototype

export const pageQuery = graphql`
	query ProductPage {
		site {
			siteMetadata {
				mocks {
					product {
						images {
							parallax
						}
					}
				}
			}
		}
	}
`
