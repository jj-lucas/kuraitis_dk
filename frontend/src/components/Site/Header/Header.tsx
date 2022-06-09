import React from 'react'
import styled from 'styled-components'
import { min, max, theme } from '@/styles'
import Logo from './Logo'
import HorizontalNav from './HorizontalNav'

const StyledHeader = styled.div`
	background: #9d9dda;

	position: fixed;
	top: 0;
	width: 100%;
	z-index: 10;

	&.collapsed {
		background: #b14d84;
	}

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
	background: #5f4db1;

	page-break-after: always; /* CSS 2.1 syntax */
	break-after: always; /* New syntax */

	width: 20%;
`
const Utils: React.FC = () => <StyledUtils>ipiscing elit, sed </StyledUtils>

const StyledBurgerMenu = styled.div`
	background: #b14d84;

	width: 20%;

	${min.sm`
		display: none;
	`}
`
const BurgerMenu: React.FC = () => <StyledBurgerMenu>=</StyledBurgerMenu>

const StatusBar = styled.div`
	background: #ca9a9ad2;

	.status-bar-inner {
		background-color: aqua;
		max-width: var(--maxWidth);
		display: flex;
		margin: auto;
		padding: 0;
		justify-content: space-between;
		font-size: ${p => p.theme.typography.fs.sm};
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

const Header: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
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

export default Header
