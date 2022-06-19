import React, { ReactNode, useContext } from 'react'
import styled from 'styled-components'
import { SideMenuContext } from './Page'

const StyledDrawer = styled.div`
	width: 80%;
	background: white;
	position: fixed;
	top: 0;
	bottom: 0;
	left: -80%;
	z-index: 100;
	transition: left ${p => p.theme.transition.duration.sm} ${p => p.theme.transition.type.easeInOut};

	&.right {
		left: 100%;
	}

	&.expanded {
		left: 0;

		&.right {
			left: 20%;
		}
	}
`
const Drawer: React.FC<{ side: 'left' | 'right'; children: ReactNode; expanded: boolean }> = ({
	side,
	children,
	expanded,
}) => {
	return (
		<StyledDrawer className={`${side} ${expanded ? 'expanded' : ''}`}>
			<h1> HEllo</h1>
		</StyledDrawer>
	)
}

const StyledOverlay = styled.div`
	background-color: black;
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	z-index: 100;
	pointer-events: none;
	opacity: 0;
	transition: opacity ${p => p.theme.transition.duration.sm} ${p => p.theme.transition.type.easeInOut};

	&.expanded {
		pointer-events: auto;
		opacity: 0.5;
		transition-duration: ${p => p.theme.transition.duration.lg};
	}
`
const Overlay: React.FC<{ expanded: boolean }> = ({ expanded }) => {
	const { setExpanded } = useContext(SideMenuContext)
	const onClick = () => {
		setExpanded(false)
	}

	return <StyledOverlay className={expanded ? 'expanded' : ''} onClick={onClick} />
}
const MenuDrawer: React.FC = ({ side }) => {
	const { expanded } = useContext(SideMenuContext)

	console.log(expanded)
	return (
		<>
			<Overlay expanded={expanded} />
			<Drawer side="left" expanded={expanded}>
				<h1> HEllo</h1>
			</Drawer>
		</>
	)
}

export { MenuDrawer }
