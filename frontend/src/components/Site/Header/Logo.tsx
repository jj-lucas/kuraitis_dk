import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { min, max } from '@/styles'
import { HeaderCollapsedContext } from '@/components'

const collapsedLogo = css`
	> span > span {
		${min.sm`
				opacity: 0;
				pointer-events: none;
				transition: all ease-in-out 0.3s;
			`}

		&.sergio {
			display: inline-flex;
			align-self: flex-start;
			margin-top: 0;
			transition: all ease-in-out 0.3s;

			${min.sm`
					opacity: 1;
					margin-top: 25px;
				`}
		}
	}
`
const StyledLogo = styled.a`
	position: relative;
	display: inline-flex;
	height: 100%;
	flex-shrink: 0;

	color: var(--black);
	font-family: ${p => p.theme.typography.ff.stick};
	font-size: ${p => p.theme.typography.fs.base};

	box-shadow: none;

	${p => min.sm`
		.sergio {
			font-size: ${p.theme.typography.fs.lg};
		}
		font-size: ${p.theme.typography.fs.h3};
	`}

	${max.md`
		// height: 40px;
	`}

	> span {
		opacity: 0;

		> span {
			transition: opacity ease-in-out 0.3s;
		}

		.sergio {
			text-transform: uppercase;
			font-weight: ${p => p.theme.typography.fw.bold};

			margin-top: 0;
			transition: margin ease-in-out 0.3s;
		}

		${min.xs`
			opacity: 1;
			display: inline-flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
		`}
	}

	&.collapsed {
		${collapsedLogo}
	}

	${p => p.theme.media.minScreenHeightForCollapsedHeader} {
		${collapsedLogo}
	}

	img {
		height: 100%;
	}
`

const Logo: React.FC = () => {
	const { collapsed } = useContext(HeaderCollapsedContext)

	return (
		<StyledLogo href="#" className={`button ${collapsed ? 'collapsed' : ''}`}>
			<img src="https://d33wubrfki0l68.cloudfront.net/8e679f4eacde819d4909fbad17a6aa8b5786dd8b/49226/logo.png"></img>
			<span>
				<span className="sergio">Sergio Kuraitis</span>
				<span className="slogan">Naturligt Design</span>
			</span>
		</StyledLogo>
	)
}

export default Logo
