import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AiFillStar as StarIcon } from 'react-icons/ai'
import { Wrapper } from '@/components'
import { useStaticQuery, graphql } from 'gatsby'
import { FooterQuery } from '../../../graphql-types'

const Review: React.FC = () => {
	const site = {
		siteMetadata: { mocks: { review: 'test' } },
	}

	if (!site) return null

	return (
		<p className="review">
			<StarIcon />
			<StarIcon />
			<StarIcon />
			<StarIcon />
			<StarIcon />
			<br />
			{site.siteMetadata?.mocks?.review}
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

const Footer: React.FC = () => {
	const { site } = useStaticQuery<FooterQuery>(graphql`
		query Footer {
			site {
				siteMetadata {
					mocks {
						review
						translations {
							footer
							footer_cookie
							footer_privatlivs
						}
					}
				}
			}
		}
	`)

	return (
		<Wrapper>
			<StyledFooter>
				<Review />
				<div className="address">{site?.siteMetadata?.mocks?.translations?.footer}</div>
				<div className="links">
					<a href="#">{site?.siteMetadata?.mocks?.translations?.footer_privatlivs}</a>
					{' | '}
					<a href="#">{site?.siteMetadata?.mocks?.translations?.footer_cookie}</a>
				</div>
			</StyledFooter>
		</Wrapper>
	)
}

export { Footer }
