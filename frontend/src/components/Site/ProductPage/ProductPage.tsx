import React from 'react'
import styled from 'styled-components'
import Details from './Details'
import Gallery from './Gallery'
import { Docker } from './Docker'
import { min } from '@/styles'
import ColorVariations from './ColorVariations'
import { Wrapper, Parallax } from '@/components'
import LongDescription from './LongDescription'
import Sergio from './Sergio'

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
	console.log('Render content')

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
			<Parallax src="https://previews.123rf.com/images/mtoome/mtoome1609/mtoome160900099/63492873-leather-handbag-craftsman-at-work-in-a-workshop.jpg" />
			<Wrapper>
				<LongDescription />
			</Wrapper>
			<Sergio />
		</StyledProductPage>
	)
}

export default ProductPage
