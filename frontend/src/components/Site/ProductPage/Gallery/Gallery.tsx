import React from 'react'
import styled from 'styled-components'

const StyledPicture = styled.div`
	--productPageContentStart: ${p => p.theme.sizes.productPageContentStart};

	background: white;
	width: 100%;
	height: calc(100vh - var(--productPageContentStart));

	@media (orientation: portrait) {
		max-height: 500px;
	}

	&:last-of-type {
		height: auto;
	}

	img {
		width: 100%;
		height: auto;
	}
`

const Picture: React.FC<{ src: string }> = ({ src }) => (
	<StyledPicture>
		<img src={src} />
	</StyledPicture>
)

const Gallery: React.FC<{ collapsed?: boolean }> = () => {
	console.log('Render gallery')
	return (
		<div className="gallery">
			<Picture src="https://res.cloudinary.com/kuraitis/image/upload/v1641665283/products/ouvgk0hsjnsvrozjqdxk.jpg" />
			<Picture src="https://res.cloudinary.com/kuraitis/image/upload/v1617901813/products/to8omylzrz4hmg6mwhn5.jpg" />
			<Picture src="https://res.cloudinary.com/kuraitis/image/upload/v1617901792/products/wokipe2phwvvuqois6rt.jpg" />
		</div>
	)
}

export default Gallery
