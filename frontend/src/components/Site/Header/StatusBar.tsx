import React from 'react'
import styled from 'styled-components'
import { min } from '@/styles'

const StyledSatusBar = styled.div`
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

const StatusBar: React.FC = () => (
	<StyledSatusBar>
		<ul className="status-bar-inner">
			<li>Handmade exclusive design</li>
			<li className="primary">Free delivery in Denmark</li>
			<li className="secondary">30 days return right*</li>
		</ul>
	</StyledSatusBar>
)

export { StatusBar }
