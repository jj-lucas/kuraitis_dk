import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
	background-color: ${props => props.theme.colors.tertiary};
`

const Page: React.FC = props => (
	<div>
		<Header>Header</Header>
		<div>{props.children}</div>
	</div>
)

export { Page }
