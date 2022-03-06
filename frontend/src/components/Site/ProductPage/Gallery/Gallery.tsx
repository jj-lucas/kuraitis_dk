import React from 'react'
import styled from 'styled-components'

const StyledPicture = styled.div`
	--productPageContentStart: ${p => p.theme.sizes.productPageContentStart};

	background: rgb(57, 57, 57);
	background: radial-gradient(circle, rgba(57, 57, 57, 1) 0%, rgba(164, 164, 167, 1) 35%, rgba(241, 241, 241, 1) 100%);
	width: 100%;
	height: calc(100vh - var(--productPageContentStart));
	border: 1px dashed gray;
`

const Gallery: React.FC<{ collapsed?: boolean }> = () => {
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
