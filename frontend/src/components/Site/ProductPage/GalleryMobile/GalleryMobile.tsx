import React from 'react'
import styled from 'styled-components'
import Flickity from 'react-flickity-component'
import { min } from '@/styles'

const StyledGalleryMobile = styled.div`
	${min.md`
		display: none;
	`}

	height: ${p => p.theme.sizes.productPageMobileGalleryHeight};

	.carousel {
		height: ${p => p.theme.sizes.productPageMobileGalleryHeight};
	}

	img {
		height: ${p => p.theme.sizes.productPageMobileGalleryHeight};
	}
`

const GalleryMobile: React.FC = () => {
	const flickityOptions = { setGallerySize: true }

	return (
		<StyledGalleryMobile>
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
		</StyledGalleryMobile>
	)
}

export default GalleryMobile
