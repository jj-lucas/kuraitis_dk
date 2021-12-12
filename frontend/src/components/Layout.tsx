import React from 'react'
import styled from 'styled-components'

export const Header = styled.div`
	background-color: ${props => props.theme.colors.tertiary};
`

const Layout: React.FC = props => (
	<div>
		<Header>Header</Header>
		<div>{props.children}</div>
	</div>
)

export { Layout }
