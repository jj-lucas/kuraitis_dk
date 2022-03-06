import React, { useContext } from 'react'
import styled from 'styled-components'
import { min, max } from '@/styles'
import Logo from '../../product2/Logo'
import HorizontalNav from '../../product2/HorizontalNav'
import { ScrollContext } from '@/components'

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
	z-index: 10;

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
		width: 100%;

		max-width: var(--maxWidth);

		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

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

	page-break-after: always; /* CSS 2.1 syntax */
	break-after: always; /* New syntax */

	width: 20%;
`
const Utils: React.FC = () => <StyledUtils>ipiscing elit, sed </StyledUtils>

const StickyHeader: React.FC<{ defaultCollapsed?: boolean }> = props => {
	const collapsed = useContext(ScrollContext)

	/*
	const setCollapsedControlled = (next: boolean) => {
		setCollapsed(props.collapsed || next)
	}
	*/

	console.log('render heder')

	return (
		<>
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
					<HorizontalNav />
					<Utils />
				</div>
			</StyledStickyHeader>
		</>
	)
}

export default StickyHeader
