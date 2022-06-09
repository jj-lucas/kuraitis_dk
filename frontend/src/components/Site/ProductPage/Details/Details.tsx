import { min } from '@/styles'
import React from 'react'
import styled from 'styled-components'
import GalleryMobile from '../GalleryMobile'
import DetailsBottom from './DetailsBottom'
import DetailsTop from './DetailsTop'

const StyledDetails = styled.div`
	.content {
		//background: #cde0cd;

		${p => min.md`
			width: inherit;
			max-width: calc(var(--maxWidth) * 0.4);
			position: fixed;
			top: 50%;
			transform: translate(0, -50%);
			padding-bottom: ${p.theme.spacing.lg};
		`}

		&.docked {
			${min.md`
			//background: #d8c3c3;
			position: absolute;
			top: auto !important;
			width: 100%;
			bottom: 0;
			transform: translate(0, 0);
			`}
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
				<DetailsTop />
				<GalleryMobile />
				<DetailsBottom />
			</div>
		</StyledDetails>
	)
}

export default Details
