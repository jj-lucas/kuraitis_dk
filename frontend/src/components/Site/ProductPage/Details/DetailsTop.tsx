import { ProductContext } from '@/contexts'
import React, { useContext } from 'react'
import styled from 'styled-components'

const StyledDetailsTop = styled.div`
	${p => p.theme.media.minScreenHeightForCollapsedHeader} {
		padding-top: ${p => p.theme.spacing.sm};
	}

	.price {
		font-size: ${p => p.theme.typography.fs.h3};
	}
`
const DetailsTop: React.FC = () => {
	const product = useContext(ProductContext)

	return (
		<StyledDetailsTop>
			<small className="breadcrumbs">
				{product?.breadcrumbs
					?.map(crumb => (
						<a key={crumb?.url || ''} href={crumb?.url || ''}>
							{crumb?.label}
						</a>
					))
					.flatMap(x => [x, ' > '])
					.slice(0, -1)}
			</small>
			<h1>{product?.title}</h1>
			<p>
				<span className="price">430,- DKK</span>
			</p>
		</StyledDetailsTop>
	)
}

export default DetailsTop
