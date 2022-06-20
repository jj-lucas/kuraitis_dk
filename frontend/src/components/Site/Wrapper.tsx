import React, { ReactNode } from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
	position: relative;
	z-index: 10;
	background: white;

	&.topMargin {
		margin-top: 50rem;
	}

	&.bottomMargin {
		margin-bottom: 50rem;
	}

	.innerWrapper {
		max-width: var(--maxWidth);
		padding: 1rem;
		margin: 0 auto;
	}
`

const Wrapper: React.FC<{ children: ReactNode; margin?: 'top' | 'bottom' }> = ({ children, margin }) => (
	<StyledWrapper className={margin ? `${margin}Margin` : ''}>
		<div className="innerWrapper">{children}</div>
	</StyledWrapper>
)
export default Wrapper
