import React from 'react'
import styled from 'styled-components'
import { AiFillStar as StarIcon } from 'react-icons/ai'

const StyledTrustPilot = styled.div`
	display: inline-block;
	.dummy {
		display: flex;
		width: 250px;
		height: 100px;
		background: var(--blue);
		color: var(--white);

		span {
			margin: auto;
			font-size: 20px;
		}
	}
`
const TrustPilot: React.FC = () => (
	<StyledTrustPilot>
		<div className="dummy">
			<span>
				<StarIcon size="20" />
				<StarIcon size="20" />
				<StarIcon size="20" />
				<StarIcon size="20" />
				<StarIcon size="20" /> Trustpilot
			</span>
		</div>
	</StyledTrustPilot>
)

export { TrustPilot }
