import React, { useContext } from 'react'
import styled from 'styled-components'
import { min, max, theme } from '@/styles'
import Logo from './Logo'
import HorizontalNav from './HorizontalNav'
import { HeaderCollapsedContext, SideMenuContext } from '@/components'

const StyledHeader = styled.div`
	background: var(--white);

	position: fixed;
	top: 0;
	width: 100%;
	z-index: 10;

	box-shadow: 1px 5px 4px -3px rgba(0, 0, 0, 0.2);

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

const StyledUtils = styled.div`
	page-break-after: always; /* CSS 2.1 syntax */
	break-after: always; /* New syntax */

	width: 20%;
`
const Utils: React.FC = () => <StyledUtils>Cart</StyledUtils>

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

const StatusBar = styled.div`
	background-color: var(--green);

	.status-bar-inner {
		display: flex;
		margin: auto;
		padding: ${p => p.theme.spacing.sm};
		max-width: var(--maxWidth);
		justify-content: space-between;

		font-size: ${p => p.theme.typography.fs.base};
		color: white;

		li {
			display: none;
			width: 100%;
			list-style: none;
			text-align: center;

			&.primary {
				display: block;
			}

			${min.xs`
				&.secondary {
					display: block;
				}
			`}
			${min.md`
				display: block;
			`}
		}
	}
`

const Header: React.FC = () => {
	const { collapsed } = useContext(HeaderCollapsedContext)
	return (
		<>
			<StyledHeader className={collapsed ? 'collapsed' : ''}>
				<StatusBar>
					<ul className="status-bar-inner">
						<li>Handmade exclusive design</li>
						<li className="primary">Free delivery in Denmark</li>
						<li className="secondary">30 days return right*</li>
					</ul>
				</StatusBar>
				<div className={`headerInner ${collapsed ? 'collapsed' : ''}`}>
					<BurgerMenu />
					<Logo collapsed={collapsed} />
					<HorizontalNav />
					<Utils />
				</div>
			</StyledHeader>
		</>
	)
}

export { Header }
