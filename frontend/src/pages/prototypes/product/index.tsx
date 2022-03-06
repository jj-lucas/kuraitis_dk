import { ScrollContext } from '@/components'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Gallery from './Gallery'
import { throttle } from 'lodash'
import StickyHeader from './StickyHeader'
import { theme } from '@/styles'

const px2num = (n: string): number => {
	return parseInt(n.replace('px', ''), 10)
}

const StyledContent = styled.div`
	--status: ${p => p.theme.sizes.headerStatusHeight};
	--innerExpanded: ${p => p.theme.sizes.headerInnerHeightExpanded};
	--innerCollapsed: ${p => p.theme.sizes.headerInnerHeightCollapsed};
	--gap: ${p => p.theme.sizes.headerGap};
	--smallGap: calc((var(--innerExpanded) - var(--innerCollapsed)) / 2);
	--topDockingGap: ${p => p.theme.sizes.productTopDockingGap};

	max-width: var(--maxWidth);
	margin: 0 auto;

	.top {
		display: flex;

		> div {
			width: 50%;
		}

		.content {
			h1 {
				margin-top: 0;
			}

			&.collapsed {
				width: inherit;
				max-width: calc(var(--maxWidth) / 2);
				position: fixed;
				top: calc(var(--status) + var(--innerExpanded));
			}

			&.docked {
				position: absolute;
				top: auto;
				width: 100%;
				bottom: var(--topDockingGap);
			}
		}
	}
`

const Docker: React.FC<{ docked: boolean; setDocked: (next: boolean) => void }> = ({ docked, setDocked }) => {
	const [scrollPosition, setScrollPosition] = useState(window.pageYOffset)

	useEffect(() => {
		const handleScroll = throttle(() => {
			const position = window.pageYOffset
			setScrollPosition(position)
		}, 50)

		window.addEventListener('scroll', handleScroll, { passive: true })

		setTimeout(handleScroll, 10) // race condition

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		const top = document?.getElementById('docked')?.getBoundingClientRect()
		const end = document?.getElementById('end')?.getBoundingClientRect()
		if (end?.top && top?.bottom) {
			if (!docked) {
				// content floating, check when to dock
				if (end.top - top.bottom <= 0) {
					setDocked(true)
				}
			} else {
				// content docked, check when to undock
				if (top.top > px2num(theme.sizes.headerStatusHeight) + px2num(theme.sizes.headerInnerHeightExpanded)) {
					setDocked(false)
				}
			}
		}
	}, [scrollPosition])

	return <div id="end" />
}

const Details: React.FC<{ docked: boolean }> = ({ docked }) => {
	const collapsed = useContext(ScrollContext)

	console.log('render Details')

	return (
		<div style={{ position: 'relative' }}>
			<div className={`content ${collapsed && !docked ? 'collapsed' : ''} ${docked ? 'docked' : ''}`} id="docked">
				<h1>Lorem ipsum dolor sit</h1>
				<h1>Lorem ipsum dolor sit</h1>
				<h1>Lorem ipsum dolor sit</h1>
				<h1>Lorem ipsum dolor sit</h1>
			</div>
		</div>
	)
}

const Content = () => {
	const [docked, setDocked] = useState(false)
	console.log('Render content')
	return (
		<StyledContent>
			<section className="top" id="top">
				<Details docked={docked} />
				<Gallery />
			</section>
			<Docker docked={docked} setDocked={setDocked} />
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
	)
}
const ProductPage: React.FC = () => (
	<>
		<StickyHeader />
		<Content />
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
