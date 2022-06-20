import React, { useContext } from 'react'
import styled from 'styled-components'
import { min, max } from '@/styles'
import Logo from './Logo'
import HorizontalNav from './HorizontalNav'
import { HeaderCollapsedContext } from '@/components'
import { StatusBar } from './StatusBar'
import { Utils } from './Utils'
import { BurgerMenu } from './BurgerMenu'

const StyledHeader = styled.div`
	background: var(--white);

	position: fixed;
	top: 0;
	width: 100%;
	z-index: 20;

	box-shadow: ${p => p.theme.boxShadow.sm};

	.headerInner {
		padding: 2rem 2rem 3rem;
		height: 70px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		max-width: var(--maxWidth);
		margin: 0 auto;
		transition: all ease-in 0.3s;

		${min.md`
			padding: 2rem 2rem;
		`}
		${max.sm`
			padding: 2rem 2rem;
		`}

		&.collapsed {
			padding: 1rem 2rem 3rem;
			height: 40px;

			${min.md`
				padding: 1rem 2rem;
			`}
			${max.sm`
				padding: 1rem 2rem;
			`}
		}
	}
`

const Header: React.FC = () => {
	const { collapsed } = useContext(HeaderCollapsedContext)
	return (
		<>
			<StyledHeader className={collapsed ? 'collapsed' : ''}>
				<StatusBar />
				<div className={`headerInner ${collapsed ? 'collapsed' : ''}`}>
					<BurgerMenu />
					<Logo />
					<HorizontalNav />
					<Utils />
				</div>
			</StyledHeader>
		</>
	)
}

export { Header }
