import React, { useContext } from 'react'
import styled from 'styled-components'
import Details from './Details'
import Gallery from './Gallery'
import { Docker } from './Docker'
import { min } from '@/styles'
import ColorVariations from './ColorVariations'
import { Wrapper, Parallax } from '@/components'
import LongDescription from './LongDescription'
import Sergio from './Sergio'
import { ProductContext } from '@/contexts'

const StyledProductPage = styled.div`
	--productPageContentStart: ${p => p.theme.sizes.productPageContentStart};

	.top {
		margin: 12rem auto 2rem;

		${min.md`
			margin: var(--productPageContentStart) auto 0;
			display: flex;
		`}

		.details {
			${min.md`
				width: 40%;
			`}
		}

		.gallery {
			display: none;

			${min.md`
				width: 60%;
				display: block;
			`}
		}
	}
`

const ProductPage: React.FC = () => {
	const product = useContext(ProductContext)

	console.log({ product })

	return (
		<StyledProductPage>
			<Wrapper>
				<section className="top" id="top">
					<Details />
					<Gallery />
				</section>
			</Wrapper>
			<Docker />
			<Wrapper>
				<ColorVariations />
			</Wrapper>
			<Wrapper>
				<LongDescription />
			</Wrapper>
			<Parallax src={product?.images?.parallax || ''} />
			<Sergio />
		</StyledProductPage>
	)
}

export default ProductPage
