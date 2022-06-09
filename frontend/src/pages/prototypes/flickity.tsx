import React from 'react'
import Flickity from 'react-flickity-component'
import styled from 'styled-components'

const Wrapper = styled.div`
	margin-top: 250px;
	/* carousel height */
	.carousel {
		height: 160px;
	}

	img {
		height: 160px;
	}
`

const FlickityPage: React.FC = () => {
	const flickityOptions = { setGallerySize: false }
	return (
		<Wrapper>
			<Flickity
				className={'carousel'} // default ''
				elementType={'div'} // default 'div'
				options={flickityOptions} // takes flickity options {}
				disableImagesLoaded={false} // default false
				reloadOnUpdate // default false
				static // default false
			>
				<img src="https://res.cloudinary.com/kuraitis/image/upload/v1641665283/products/ouvgk0hsjnsvrozjqdxk.jpg" />
				<img src="https://res.cloudinary.com/kuraitis/image/upload/v1617901813/products/to8omylzrz4hmg6mwhn5.jpg" />
				<img src="https://res.cloudinary.com/kuraitis/image/upload/v1617901792/products/wokipe2phwvvuqois6rt.jpg" />
			</Flickity>
		</Wrapper>
	)
}

export default FlickityPage
