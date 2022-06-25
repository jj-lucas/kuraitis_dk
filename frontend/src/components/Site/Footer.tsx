import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AiFillStar as StarIcon } from 'react-icons/ai'
import { Wrapper } from '@/components'

const Reviews: React.FC = () => {
	const [review, setReview] = useState('')

	useEffect(() => {
		// get review from API
		setReview(
			'I love this key organizer. Great craftsmanship & shipped pretty quickly. I would definitely purchase from Sergio again.'
		)
	})

	if (!review) return null

	return (
		<p className="reviews">
			<StarIcon />
			<StarIcon />
			<StarIcon />
			<StarIcon />
			<StarIcon />
			<br />
			{review}
			<br />
			<a href="#">Læs mere feedback</a>
		</p>
	)
}

const StyledFooter = styled.div`
	text-align: center;

	> div {
		margin-bottom: ${p => p.theme.spacing.sm};
	}
`

const Footer: React.FC = () => (
	<Wrapper>
		<StyledFooter>
			<Reviews />
			<div className="address">
				© 2022, Sergio Kuraitis - Naturligt Design. CVR: 32220649 Højrisvej 13, 7900 Nykøbing Mors, Denmark |
				sergio@kuraitis.dk
			</div>
			<div className="links">
				<a href="#">Privatlivspolitik</a>
				{' | '}
				<a href="#">Cookiepolitik</a>
			</div>
		</StyledFooter>
	</Wrapper>
)

export { Footer }
