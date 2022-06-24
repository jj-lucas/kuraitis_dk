import React from 'react'
import styled from 'styled-components'

const StyledParallax = styled.div<{ src: string }>`
	margin-top: -100vh;
	width: 100vw;
	height: 100vh;
	position: -webkit-sticky; /* Safari */
	position: sticky;
	top: 0;
	z-index: 0;
	background-image: url(${p => p.src});
	background-position: left top;
	background-repeat: no-repeat;
	background-size: cover;
`
const StyledSpacer = styled.div`
	display: inline-block;
	width: 100%;
	padding: 50vh 0 0; // iOS has collapsing margins
`

// important: if using more than one parallax in a page, ensure there is at least 100vh of content between them
// or the two will overlap in massive screens
const Parallax: React.FC<{ src: string }> = ({ src }) => (
	<>
		<StyledParallax src={src} />
		<StyledSpacer />
	</>
)

export { Parallax }
