import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { min, theme } from '../../styles'

const StyledLogo = styled.a`
	background: #ffff003d;
	display: inline-flex;

	> span {
		margin: 0;

		display: inline-flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;

		.sergio {
			text-transform: uppercase;
		}
	}
`

const Logo: React.FC = () => (
	<StyledLogo href="#">
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

const StyledStickyHeader = styled.header`
	display: flex;
	background: #4db1b1;
	align-items: center;
	position: sticky;
	flex-direction: column;
	top: calc(
		${p => p.theme.sizes.headerGap} * -2
	); /* Equal to the height difference between header-outer and header-inner */
	height: calc(
		${p => p.theme.sizes.headerStatusHeight} + ${p => p.theme.sizes.headerInnerHeight} + ${p => p.theme.sizes.headerGap} *
			2
	);

	&.collapsed {
	}

	.status-bar {
		background: #ac9acad2;
		height: ${p => p.theme.sizes.headerStatusHeight};
		width: 100%;
		position: sticky;
		top: 0;

		.status-bar-inner {
			background-color: aqua;
			display: flex;
			margin: auto;
			padding: 0;
			max-width: 960px;
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

				${min.sm`display: block;`}

				${min.xs`
					&.secondary {
						display: block;
					}
				`}
			}
		}
	}

	.header-inner {
		background: #9acacad3;
		height: calc(${p => p.theme.sizes.headerInnerHeight});
		width: 100%;
		position: sticky;
		top: calc(${p => p.theme.sizes.headerStatusHeight} + ${p => p.theme.sizes.headerGap});
		max-width: 960px;
		margin: auto;
	}
`

const Content = styled.div`
	max-width: 960px;
	margin: 100px auto 0;
`

const StickyHeader: React.FC = props => {
	const [scrollPosition, setScrollPosition] = useState(0)

	const handleScroll = () => {
		const position = window.pageYOffset
		setScrollPosition(position)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const shrink = scrollPosition - px2num(theme.sizes.headerGap) * 2 > 0 ? true : false

	return (
		<StyledStickyHeader className={shrink ? 'collapsed' : ''}>
			<div className="status-bar">
				<ul className="status-bar-inner">
					<li>Handmade exclusive design</li>
					<li className="primary">Free delivery in Denmark</li>
					<li className="secondary">30 days return right*</li>
				</ul>
			</div>
			<div className="header-inner responsive-wrapper">
				<Logo />
				<span>
					{scrollPosition} - {shrink.toString()}
				</span>
			</div>
		</StyledStickyHeader>
	)
}

const ProductPage: React.FC = () => (
	<>
		<StickyHeader />
		{/*
		<Header>
			<StatusBar>
				<li>Handmade exclusive design</li>
				<li className="primary">Free delivery in Denmark</li>
				<li className="secondary">30 days return right*</li>
			</StatusBar>
			<HeaderContent>
				<Logo />
			</HeaderContent>
		</Header>
			*/}
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
