import React from 'react'
import { Header } from '../../components'

const Page: React.FC = props => (
	<div>
		<Header />
		<div>{props.children}</div>
	</div>
)

export { Page }
