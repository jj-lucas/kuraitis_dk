import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
	list-style: none;
	display: grid;
	padding: 0;
	grid-template-columns: 1fr 1fr;
	grid-gap: 0px;

	@media (min-width: ${props => props.theme.breakpoints.sm}) {
		grid-template-columns: ${props => '1fr '.repeat(4)};
	}
`

const StyledCard = styled.li`
	padding: 1rem;

	a {
		display: block;
		box-shadow: none;

		img {
			transition: all ${props => `${props.theme.transition.duration.sm} ${props.theme.transition.type.easeInOut}`};
		}
		&:hover img {
			box-shadow: ${props => props.theme.boxShadow.md};
		}
	}

	img {
		width: 100%;
	}
`

const ColorVariations: React.FC = () => {
	return (
		<div>
			<h3>Also available in other colors</h3>
			<StyledList>
				<StyledCard>
					<a href="/da/produkt/oe/brilleetui-oe">
						<div>
							<picture>
								<img
									src="https://res.cloudinary.com/kuraitis/image/upload/v1641724594/products/l3xco11gwlqk71oe8nal.jpg"
									alt="Klassisk brilleetui i læder"
								/>
							</picture>
						</div>
					</a>
				</StyledCard>

				<StyledCard>
					<a href="/da/produkt/oe/brilleetui-oe">
						<div>
							<picture>
								<img
									src="https://res.cloudinary.com/kuraitis/image/upload/v1641727554/products/khyuhmmmaxhzmepk7cws.jpg"
									alt="Klassisk brilleetui i læder"
								/>
							</picture>
						</div>
					</a>
				</StyledCard>
			</StyledList>
		</div>
	)
}

export default ColorVariations
