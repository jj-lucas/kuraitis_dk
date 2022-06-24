import React from 'react'
import styled from 'styled-components'
import { Wrapper, LoremIpsum } from '@/components'
import { min } from '@/styles'

const StyledSergio = styled.div`
	position: relative;
	background: var(--darkBrown);
	color: white;

	section {
		padding: ${p => p.theme.spacing.sm};

		.text {
			flex-basis: 60%;
			text-align: justify;
			text-justify: inter-word;
			margin-bottom: 4rem;
		}
		${min.md`
		    margin: ${p => p.theme.spacing.base} 0;
            
            > div {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .text {
                flex-basis: 60%;
                text-align: justify;
                text-justify: inter-word;
            }
            `}
		.image {
			text-align: center;

			img {
				border-radius: 5px;
			}
		}
	}
`

const Sergio: React.FC = () => (
	<StyledSergio>
		<Wrapper transparent={true}>
			<section>
				<h2>Sergio Kuraitis</h2>
				<div>
					<div className="text">
						<LoremIpsum></LoremIpsum>
						<LoremIpsum></LoremIpsum>
					</div>
					<div className="image">
						<img src="https://kuraitis.dk/images/sergio.jpg" />
					</div>
				</div>
			</section>
		</Wrapper>
	</StyledSergio>
)

export default Sergio
