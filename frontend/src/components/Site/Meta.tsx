import React from 'react'
import { Helmet } from 'react-helmet'

const Meta: React.FC = props => (
	<Helmet>
		{/* Fonts */}
		<link href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Roboto&display=swap" rel="stylesheet" />

		{props.children}
	</Helmet>
)

export { Meta }
