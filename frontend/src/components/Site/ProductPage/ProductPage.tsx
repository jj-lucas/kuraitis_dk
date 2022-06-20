import React from 'react'
import styled from 'styled-components'
import Details from './Details'
import Gallery from './Gallery'
import { LoremIpsum } from '@/components'
import { Docker } from './Docker'
import { min } from '@/styles'
import Parallax from './Parallax'
import ColorVariations from './ColorVariations'
import Wrapper from '../Wrapper'

const StyledProductPage = styled.div`
	--productPageContentStart: ${p => p.theme.sizes.productPageContentStart};

	.top {
		margin: var(--productPageContentStart) auto 0;
		margin-bottom: 2rem;
		${min.md`
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
			<Parallax zindex={1} src="https://previews.123rf.com/images/mtoome/mtoome1609/mtoome160900099/63492873-leather-handbag-craftsman-at-work-in-a-workshop.jpg" />

			<Wrapper topMargin={true}>
				<LoremIpsum />
				<LoremIpsum />
			</Wrapper>
			<Parallax src="https://previews.123rf.com/images/mtoome/mtoome1608/mtoome160800129/62612777-leather-handbag-craftsman-at-work-in-a-workshop.jpg" />

			<Wrapper topMargin={true}>
				<LoremIpsum />
				<LoremIpsum />
			</Wrapper>
		</StyledProductPage>
	)
}

export default ProductPage
