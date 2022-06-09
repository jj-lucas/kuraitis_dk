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
		color: var(--black);

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
	.meta {
		padding: 0 2rem;
		//font-weight: ${props => props.theme.typography.fw.semibold};

		p {
			margin: 0;
			//font-size: ${props => props.theme.typography.fs.base};
			//font-weight: ${props => props.theme.typography.fw.regular};
		}
	}
`

const ColorVariations: React.FC = () => {
	return (
		<div>
			<h3>Also available in other colors</h3>
			<StyledList className="ProductsList__StyledList-k6tm6c-0 iQRkmy">
				<StyledCard className="ProductsList__StyledCard-k6tm6c-1 kelpnm">
					<a href="/da/produkt/oe/brilleetui-oe">
						<div>
							<picture className="Picture__StyledPicture-sc-1y92jz2-0 jqKWba">
								<img
									src="https://res.cloudinary.com/kuraitis/image/upload/v1641724594/products/l3xco11gwlqk71oe8nal.jpg"
									alt="Klassisk brilleetui i læder"
								/>
							</picture>
						</div>
					</a>
				</StyledCard>

				<StyledCard className="ProductsList__StyledCard-k6tm6c-1 kelpnm">
					<a href="/da/produkt/oe/brilleetui-oe">
						<div>
							<picture className="Picture__StyledPicture-sc-1y92jz2-0 jqKWba">
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
