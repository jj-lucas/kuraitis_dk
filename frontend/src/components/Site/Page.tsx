import React from 'react'
import { Header, Meta } from '../../components'

const Page: React.FC = props => (
	<div>
		<Meta />
		<Header />
		<div>{props.children}</div>
	</div>
)

export { Page }
