import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`
	.content {
		h1 {
			margin-top: 0;
		}

		background: green;
		width: inherit;
		max-width: calc(var(--maxWidth) / 2);
		position: fixed;
		top: var(--productPageContentStart);

		&.docked {
			background: red;
			position: absolute;
			top: auto;
			width: 100%;
			bottom: 0;
		}
	}
`

const Details: React.FC<{ docked: boolean }> = ({ docked }) => {
	console.log('render Details')

	return (
		<StyledDetails style={{ position: 'relative' }}>
			<div className={`content ${docked ? 'docked' : ''}`} id="docked">
				<h1>Lorem ipsum dolor sit</h1>
				<h1>Lorem ipsum dolor sit</h1>
				<h1>Lorem ipsum dolor sit</h1>
				<h1>Lorem ipsum dolor sit</h1>
			</div>
		</StyledDetails>
	)
}

export default Details
