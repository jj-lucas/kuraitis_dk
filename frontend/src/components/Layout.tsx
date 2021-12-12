import React from 'react'

const Layout: React.FC = props => (
	<div>
		<header>Header</header>
		<div>{props.children}</div>
	</div>
)

export { Layout }
