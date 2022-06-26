import React from 'react'
import styled from 'styled-components'
import { AiFillStar as StarIcon } from 'react-icons/ai'
import { Wrapper } from '@/components'
import { useStaticQuery, graphql } from 'gatsby'
import { FooterQuery } from '../../../graphql-types'
import { useReviewQuery } from '@/graphql-queries'
import { nationalize } from '@/utils'

const Review: React.FC = () => {
	const { data, loading } = useReviewQuery({})

	if (loading) return null

	return (
		<p className="review">
			<StarIcon />
			<StarIcon />
			<StarIcon />
			<StarIcon />
			<StarIcon />
			<br />
			{nationalize(data?.review)}
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
						translations {
							footer {
								da
							}
							footer_cookie {
								da
							}
							footer_privatlivs {
								da
							}
						}
					}
				}
			}
		}
	`)

	const mock = site?.siteMetadata?.mocks

	return (
		<Wrapper>
			<StyledFooter>
				<Review />
				<div className="address">{nationalize(mock?.translations?.footer)}</div>
				<div className="links">
					<a href="#">{nationalize(mock?.translations?.footer_privatlivs)}</a>
					{' | '}
					<a href="#">{nationalize(mock?.translations?.footer_cookie)}</a>
				</div>
			</StyledFooter>
		</Wrapper>
	)
}

export { Footer }
