import React from 'react'
import styled from 'styled-components'
import { maxHeight } from '@/styles'

const StyledVariantSelector = styled.div`
	h4 {
		margin: ${p => p.theme.spacing.base} 0 0;
	}
	.sizes {
		display: inline-flex;
		margin: 1rem 0 0;
		padding: 0;

		li {
			list-style: none;
			margin: 0 1rem 0 0;
			padding: 1rem 2rem;
			border: 1px solid gray;

			cursor: pointer;

			transition: background-color ${p => p.theme.transition.type.cubic} ${p => p.theme.transition.duration.sm};

			&:hover {
				background-color: ${p => p.theme.colors.accent};
			}
		}
	}
	input[type='text'] {
		margin: 1rem 1rem 0 0;
		padding: 1rem;
		width: 46px;
		text-align: center;
	}

	button {
		margin: ${p => p.theme.spacing.base} 0 0;
	}

	@media (max-height: 870px) {
		.customization {
			display: none;
		}
	}
`

const VariantSelector = () => {
	const variants = {
		size: ['S', 'L'],
	}

	return (
		<StyledVariantSelector>
			{variants.size && (
				<>
					<h4>Size</h4>
					<ul className="sizes">
						{variants.size.map(size => (
							<li key={size}>{size}</li>
						))}
					</ul>
					<a href="#">Size chart</a>
					<div className="customization">
						<h4>Customization</h4>
						<input type="text" />
						<a href="#">?</a>
					</div>
					<button className="primary">Add to cart</button>
				</>
			)}
		</StyledVariantSelector>
	)
}

export { VariantSelector }
