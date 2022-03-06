import React, { useContext } from 'react'
import styled from 'styled-components'
import HorizontalNav from './HorizontalNav'
import Logo from './Logo'
import { min, max } from '@/styles'
import { ScrollContext } from '@/components'

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

const StyledHeader = styled.div`
	background: #9d9dda;

	position: fixed;
	top: 0;
	width: 100%;

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

const Header: React.FC = () => {
	const collapsed = useContext(ScrollContext)

	return (
		<StyledHeader className={collapsed ? 'collapsed' : ''}>
			<div className={`headerInner ${collapsed ? 'collapsed' : ''}`}>
				<BurgerMenu />
				<Logo collapsed={collapsed} />
				<HorizontalNav />
				<Utils />
			</div>
		</StyledHeader>
	)
}

const StyledContent = styled.div`
	max-width: var(--maxWidth);
	margin: 13rem auto 0;
`

const Product2Page: React.FC = () => (
	<>
		<Header />
		<StyledContent>
			<div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
			</div>
		</StyledContent>
	</>
)

export default Product2Page
