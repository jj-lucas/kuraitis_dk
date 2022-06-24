import React from 'react'
import styled from 'styled-components'
import { TrustPilot } from '@/components'
import SellingPoints from './SellingPoints'
import { max, min } from '@/styles'

const StyledLongDescription = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: ${p => p.theme.spacing.base};

	> div {
		flex-grow: 1;
		flex-basis: 100%;
	}

	${min.sm`
		margin-bottom: 10rem;

		.general-info {
			margin-top: 2rem;
		}
		> div {
			flex-basis: 45%;
			margin-bottom: 2rem;
		}
		.description {
		    padding-right: 5%;
		}
		.size-chart, .extras {
			flex-basis: 100%;
		}
	`}
	${min.md`
		> div {
			flex-basis: 45%;
		}
		.description, .size-chart {
		    padding-right: 5%;
		}
		.size-chart, .extras {
			flex-basis: 45%;
		}
	`}

	.dummy-chart {
		background: var(--gray30);
		width: 100%;
		height: 200px;
		margin-bottom: 2rem;
	}

	.extras {
		display: flex;
		flex-direction: column;
	}

	.extras > div {
		flex-basis: 100%;

		${max.md`
			margin: auto;
		`}
	}
`

const LongDescription: React.FC = () => (
	<StyledLongDescription>
		<div className="description">
			<h2>Lorem ipsum dolor sit amet</h2>
			<p>
				If you are always looking for your things and you appreciate practical storage solutions, this leather tray will
				allow you to store your belongings in a beautiful natural style. Your keys, coins, pens and everything your
				imagination determines can be contained in this practical leather tray that will delight your home or office. It
				is of robust construction but at the same time, soft to the touch and with a fragrance and colors characteristic
				of natural leather.
			</p>
			<p>
				If you are always looking for your things and you appreciate practical storage solutions, this leather tray will
				allow you to store your belongings in a beautiful natural style. Your keys, coins, pens and everything your
				imagination determines can be contained in this practical leather tray that will delight your home or office. It
				is of robust construction but at the same time, soft to the touch and with a fragrance and colors characteristic
				of natural leather.
			</p>
			<p>
				<strong>SKU:</strong> SVR-TAN
			</p>
		</div>
		<div className="general-info">
			<h3>Material</h3>
			<p>
				An interesting description about the materials being used based on the selected materials from the admin.
				Selling points, why sustainability, etc. An interesting description about the materials being used based on the
				selected materials from the admin. Selling points, why sustainability, etc.
			</p>
			<h3>Customize your product</h3>
			<p>
				We can add up to three initials to each item which can be embossed by pressure onto the surface of the leather,
				adding a unique touch of individuality and personality. Request such customization in the "customization" field
				above.
			</p>
		</div>
		<div className="size-chart">
			<h3>Size chart</h3>
			<div className="dummy-chart"></div>
		</div>
		<div className="extras">
			<TrustPilot />
			<SellingPoints />
		</div>
	</StyledLongDescription>
)

export default LongDescription
