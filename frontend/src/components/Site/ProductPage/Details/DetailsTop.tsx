import React from 'react'
import styled from 'styled-components'

const StyledDetailsTop = styled.div`
	${p => p.theme.media.minScreenHeightForCollapsedHeader} {
		padding-top: ${p => p.theme.spacing.sm};
	}

	.price {
		font-size: ${p => p.theme.typography.fs.h3};
	}
`
const DetailsTop: React.FC = () => (
	<StyledDetailsTop>
		<small className="breadcrumbs">
			<a href="#">Lorem</a> {'>'} <a href="#">Ipsum</a>
		</small>
		<h1>Lorem ipsum dolor sit amet</h1>
		<p>
			<span className="price">430,- DKK</span>
		</p>
	</StyledDetailsTop>
)

export default DetailsTop
