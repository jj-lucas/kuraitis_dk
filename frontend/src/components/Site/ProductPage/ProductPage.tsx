import React from 'react'
import styled from 'styled-components'
import Details from './Details'
import Gallery from './Gallery'
import { LoremIpsum } from '@/components'
import { Docker } from './Docker'

const StyledContent = styled.div`
	--productPageContentStart: ${p => p.theme.sizes.productPageContentStart};

	max-width: var(--maxWidth);
	margin: var(--productPageContentStart) auto 0;

	.top {
		display: flex;

		.details {
			width: 40%;
		}

		.gallery {
			width: 60%;
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
