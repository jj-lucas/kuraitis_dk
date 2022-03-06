import React, { useState } from 'react'
import styled from 'styled-components'
import { min, max } from '@/styles'

const StyledPicture = styled.div`
	background: rgb(57, 57, 57);
	background: radial-gradient(circle, rgba(57, 57, 57, 1) 0%, rgba(164, 164, 167, 1) 35%, rgba(241, 241, 241, 1) 100%);
	width: 100%;
	height: calc(100vh - ${p => p.theme.sizes.headerStatusHeight} - ${p => p.theme.sizes.headerInnerHeightCollapsed});
	border: 1px dashed gray;
`

const Gallery: React.FC<{ collapsed?: boolean }> = props => {
	console.log('Render gallery')
	return (
		<div>
			<StyledPicture />
			<StyledPicture />
			<StyledPicture />
		</div>
	)
}

export default Gallery
