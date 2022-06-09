import React from 'react'
import styled from 'styled-components'
import Details from './Details'
import Gallery from './Gallery'
import { LoremIpsum } from '@/components'
import { Docker } from './Docker'
import { min } from '@/styles'

const StyledContent = styled.div`
	--productPageContentStart: ${p => p.theme.sizes.productPageContentStart};

	.top {
		max-width: var(--maxWidth);
		margin: var(--productPageContentStart) auto 0;
		padding: 1rem;
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

const Parallax = styled.div<{ src: string }>`
	/* The image used */
	background-image: url(${p => p.src});

	/* Set a specific height */
	min-height: 500px;

	/* Create the parallax scrolling effect */
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
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
				<Parallax src="https://previews.123rf.com/images/mtoome/mtoome1609/mtoome160900099/63492873-leather-handbag-craftsman-at-work-in-a-workshop.jpg" />
				<LoremIpsum />
				<LoremIpsum />
				<Parallax src="https://previews.123rf.com/images/mtoome/mtoome1608/mtoome160800129/62612777-leather-handbag-craftsman-at-work-in-a-workshop.jpg" />
				<LoremIpsum />
				<LoremIpsum />
			</StyledContent>
		</>
	)
}

export default ProductPage
