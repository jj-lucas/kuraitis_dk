import React from 'react'
import styled from 'styled-components'
import { max } from '@/styles'
import { Link } from 'gatsby'

const StyledHorizontalNav = styled.ul`
	background: #d9d6e476;

	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	align-content: center;
	flex-grow: 1;
	justify-content: center;

	text-transform: uppercase;
	font-family: ${p => p.theme.typography.ff.roboto};
	font-weight: ${p => p.theme.typography.fw.semibold};

	li {
		list-style: none;
	}

	a {
		text-decoration: none;
		color: var(--black);

		& {
			display: inline-block;
			vertical-align: middle;
			transform: perspective(1px) translateZ(0);
			box-shadow: 0 0 1px rgba(0, 0, 0, 0);
			position: relative;
			overflow: hidden;
		}
		&:before {
			content: '';
			position: absolute;
			z-index: -1;

			// left: 51%;	// middle
			// right: 51%;	// middle

			left: 0; // left
			right: 100%; // left

			bottom: 0;
			background: var(--black);
			height: 2px;
			transition-property: left, right;
			transition-duration: 0.2s;
			transition-timing-function: ease-out;
		}
		&:hover:before,
		&:focus:before,
		&:active:before {
			left: 0;
			right: 0;
		}
	}

	${max.sm`
		display: none;
	`}

	${max.md`
		order: 1;
		width: 100%;
	`}
`

const HorizontalNav: React.FC<{ className?: string }> = ({ className }) => (
	<StyledHorizontalNav className={className}>
		<li>
			<Link to="#">Products</Link>
		</li>
		<li>
			<Link to="#">About</Link>
		</li>
		<li>
			<Link to="#">Materials</Link>
		</li>
		<li>
			<Link to="#">Markets</Link>
		</li>
		<li>
			<Link to="#">FAQ</Link>
		</li>
	</StyledHorizontalNav>
)

export default HorizontalNav
