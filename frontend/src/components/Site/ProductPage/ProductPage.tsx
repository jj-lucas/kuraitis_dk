import React from 'react'
import styled from 'styled-components'
import Details from './Details'
import Gallery from './Gallery'
import { LoremIpsum } from '@/components'
import { Docker } from './Docker'
import { min } from '@/styles'

const StyledContent = styled.div`
	--productPageContentStart: ${p => p.theme.sizes.productPageContentStart};

	max-width: var(--maxWidth);
	margin: var(--productPageContentStart) auto 0;
	padding: 1rem;

	.top {
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
		<>
			<StyledContent>
				<section className="top" id="top">
					<Details />
					<Gallery />
				</section>
				<Docker />
				<LoremIpsum />
				<LoremIpsum />
				<LoremIpsum />
				<LoremIpsum />
			</StyledContent>
		</>
	)
}

export default ProductPage
