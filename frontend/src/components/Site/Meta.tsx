import React from 'react'
import { Helmet } from 'react-helmet'

const Meta: React.FC = props => (
	<Helmet>
		{/* Fonts */}
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
		<link
			href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Roboto:wght@400;500;700&family=Stick+No+Bills&display=swap"
			rel="stylesheet"
		/>
		<link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css"></link>

		{props.children}
	</Helmet>
)

export { Meta }
