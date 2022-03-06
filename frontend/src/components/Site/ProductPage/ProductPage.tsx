import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Details from './Details'
import Gallery from './Gallery'
import { CollapseHeaderContext, LoremIpsum } from '@/components'
import { Docker } from './Docker'

const StyledContent = styled.div`
	--productPageContentStart: ${p => p.theme.sizes.productPageContentStart};

	max-width: var(--maxWidth);
	margin: var(--productPageContentStart) auto 0;

	.top {
		display: flex;

		> div {
			width: 50%;
		}
	}
`

const ProductPage: React.FC = () => {
	const [docked, setDocked] = useState(false)
	console.log('Render content')

	const { setCollapsed } = useContext(CollapseHeaderContext)

	useEffect(() => {
		setCollapsed(docked)
	}, [docked])

	return (
		<>
			<StyledContent>
				<section className="top" id="top">
					<Details docked={docked} />
					<Gallery />
				</section>
				<Docker docked={docked} setDocked={setDocked} />
				<LoremIpsum />
				<LoremIpsum />
				<LoremIpsum />
				<LoremIpsum />
			</StyledContent>
		</>
	)
}

export default ProductPage
