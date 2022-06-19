import React, { ReactNode } from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
	position: relative;
	z-index: 1;
	background: white;

	&.topMargin {
		margin-top: 50rem;
	}

	.innerWrapper {
		max-width: var(--maxWidth);
		padding: 1rem;
		margin: 0 auto;
	}
`

const Wrapper: React.FC<{ children: ReactNode; topMargin?: boolean }> = ({ children, topMargin }) => (
	<StyledWrapper className={topMargin ? 'topMargin' : ''}>
		<div className="innerWrapper">{children}</div>
	</StyledWrapper>
)
export default Wrapper
