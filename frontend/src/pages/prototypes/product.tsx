import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { min, max, theme } from '../../styles'
import { throttle } from 'lodash'
import { useViewportSize } from '../../utils'

const StyledLogo = styled.a`
	position: relative;
	display: inline-flex;
	height: 100%;

	color: var(--black);
	font-family: ${p => p.theme.typography.ff.roboto};
	font-size: ${p => p.theme.typography.fs.base};
	text-decoration: none;

	${p => min.sm`
		.sergio {
			font-size: ${p.theme.typography.fs.lg};
		}
		font-size: ${p.theme.typography.fs.h3};
	`}

	> span {
		display: none;

		> span {
			transition: opacity ease-in-out 0.3s;
		}

		.sergio {
			text-transform: uppercase;
			font-weight: ${p => p.theme.typography.fw.bold};

			transition: margin ease-in-out 0.2s;
		}

		${min.xs`
			display: inline-flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
		`}
	}

	&.collapsed {
		> span > span {
			${min.sm`
				opacity: 0;
				transition: all ease-in 0.3s;
			`}

			&.sergio {
				display: inline-flex;
				align-self: flex-start;

				${min.sm`
					opacity: 1;
					margin-top: 30px;	
				`}
			}
		}
	}

	img {
		height: 100%;
	}
`

const Logo: React.FC<{ collapsed: boolean }> = ({ collapsed }) => (
	<StyledLogo href="#" className={collapsed ? 'collapsed' : ''}>
		<img src="https://d33wubrfki0l68.cloudfront.net/8e679f4eacde819d4909fbad17a6aa8b5786dd8b/49226/logo.png"></img>
		<span>
			<span className="sergio">Sergio Kuraitis</span>
			<span>Naturligt Design</span>
		</span>
	</StyledLogo>
)

const px2num = (n: string): number => {
	return parseInt(n.replace('px', ''), 10)
}

const Content = styled.div`
	max-width: 960px;
	margin: 100px auto 0;
`

const ScrollerManager: React.FC<{
	collapsed: boolean
	setCollapsed: (next: boolean) => void
}> = ({ collapsed, setCollapsed }) => {
	const [scrollPosition, setScrollPosition] = useState(0)
	const [switching, setSwitching] = useState(false)
	const { matchesSize } = useViewportSize()

	const gap = px2num(theme.sizes.headerGap)

	useEffect(() => {
		const handleScroll = throttle(() => {
			const position = window.pageYOffset
			setScrollPosition(position)
		}, 50)

		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		if (!switching) {
			if (collapsed) {
				if (!scrollPosition) {
					setSwitching(true)
					setCollapsed(false)
				}
			} else {
				if (scrollPosition - gap * 2 > 0) {
					setSwitching(true)
					setCollapsed(true)
					setSwitching(false)
				}
			}
		}
	}, [scrollPosition])

	useEffect(() => {
		if (switching && !collapsed) {
			if (!matchesSize(['xs'])) {
				window.scrollTo(0, gap * 2)
			}
			setSwitching(false)
		}
	}, [collapsed])

	return null
}

const StyledStickyHeader = styled.header`
	--status: ${p => p.theme.sizes.headerStatusHeight};
	--innerExpanded: ${p => p.theme.sizes.headerInnerHeightExpanded};
	--innerCollapsed: ${p => p.theme.sizes.headerInnerHeightCollapsed};
	--gap: ${p => p.theme.sizes.headerGap};
	--smallGap: calc((var(--innerExpanded) - var(--innerCollapsed)) / 2);

	background: #4db1b1;

	position: sticky;
	top: calc(var(--gap) * -2); /* Equal to twice the scrollable gap */
	height: calc(var(--status) + var(--innerExpanded) + var(--gap) * 2);
	display: flex;
	align-items: center;
	flex-direction: column;

	&.collapsed {
		top: calc(var(--smallGap) * -2); /* Equal to twice the scrollable gap */
		height: calc(var(--status) + var(--innerCollapsed) + var(--smallGap) * 2);

		.inner {
			height: var(--innerCollapsed);
			max-height: 100%;
			top: calc(var(--status) + var(--smallGap));
		}
	}

	${max.sm`
		top: 0 !important; /* Equal to twice the scrollable gap */
		height: calc(var(--status) + var(--innerCollapsed)) !important;

		.inner {
			height: var(--innerCollapsed) !important;
			max-height: 100% !important;
			top: calc(var(--status) + var(--smallGap)) !important;
		}
	`}

	.inner {
		background: #9acacad3;

		position: sticky;
		top: calc(var(--status) + var(--gap));
		height: var(--innerExpanded);
		max-width: 960px;
		width: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		overflow: hidden;

		text-align: center;

		transition: all ease-out 0.5s;

		${min.sm`
			text-align: left;
		`}
	}

	.status-bar {
		background: #ac9acad2;

		position: sticky;
		top: 0;
		height: var(--status);
		width: 100%;
		z-index: 10;

		.status-bar-inner {
			background-color: aqua;

			max-width: 960px;
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
	}
`

const StyledBurgerMenu = styled.div`
	background: #b14d84;

	width: 20%;

	${min.sm`
		display: none;
	`}
`
const BurgerMenu: React.FC = () => <StyledBurgerMenu>=</StyledBurgerMenu>

const StyledUtils = styled.div`
	background: #5f4db1;

	width: 20%;
`
const Utils: React.FC = () => <StyledUtils>ipiscing elit, sed </StyledUtils>

const StickyHeader: React.FC<{ collapsed?: boolean }> = props => {
	const [collapsed, setCollapsed] = useState(props.collapsed || false)

	const setCollapsedControlled = (next: boolean) => {
		setCollapsed(props.collapsed || next)
	}

	return (
		<>
			<ScrollerManager collapsed={collapsed} setCollapsed={setCollapsedControlled} />
			<StyledStickyHeader className={collapsed ? 'collapsed' : ''}>
				<div className="status-bar">
					<ul className="status-bar-inner">
						<li>Handmade exclusive design</li>
						<li className="primary">Free delivery in Denmark</li>
						<li className="secondary">30 days return right*</li>
					</ul>
				</div>
				<div className="inner">
					<BurgerMenu />
					<Logo collapsed={collapsed} />
					<Utils />
				</div>
			</StyledStickyHeader>
		</>
	)
}

const ProductPage: React.FC = () => (
	<>
		<StickyHeader />
		<Content>
			<h1>Lorem ipsum dolor sit amet</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</p>
		</Content>
	</>
)

export default ProductPage

/*
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum.

*/
