import React from 'react'
import styled from 'styled-components'
import { InformationBlock } from './InformationBlock'
import { VariantSelector } from './VariantSelector'

const StyledDetails = styled.div`
	.content {
		//background: #cde0cd;
		width: inherit;
		max-width: calc(var(--maxWidth) * 0.4);
		position: fixed;
		top: 50%;
		transform: translate(0, -50%);
		padding-bottom: ${p => p.theme.spacing.lg};

		&.docked {
			//background: #d8c3c3;
			position: absolute;
			top: auto !important;
			width: 100%;
			bottom: 0;
			transform: translate(0, 0);
		}

		h1 {
			margin: 0;
			font-size: ${p => p.theme.typography.fs.h2};
		}
	}
`

const Details: React.FC<{ docked?: boolean }> = ({ docked }) => {
	console.log('render Details')

	return (
		<StyledDetails className={'details'} style={{ position: 'relative' }}>
			<div className={`content ${docked ? 'docked' : ''}`} id="docked">
				<small className="breadcrumbs">Lorem {'>'} Ipsum</small>
				<h1>Lorem ipsum dolor sit amet</h1>
				<p>
					<span className="price">430,- DKK</span>
				</p>
				<InformationBlock />
				<VariantSelector />
			</div>
		</StyledDetails>
	)
}

export default Details
