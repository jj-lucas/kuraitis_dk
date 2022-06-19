import React, { useContext } from 'react'
import styled from 'styled-components'
import { min } from '@/styles'
import { SideMenuContext } from '@/components'

const StyledBurgerMenu = styled.div`
	width: 20%;

	${min.sm`
		display: none;
	`}
`

const BurgerMenu: React.FC = () => {
	const { setExpanded } = useContext(SideMenuContext)
	const onClick = () => {
		console.log('expanded')
		setExpanded(true)
	}

	return (
		<StyledBurgerMenu>
			<button onClick={onClick}>=</button>
		</StyledBurgerMenu>
	)
}

export { BurgerMenu }
