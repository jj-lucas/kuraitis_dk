import React from 'react'
import styled from 'styled-components'
import { min } from '../../../styles'

const StyledLogo = styled.a`
	position: relative;
	display: inline-flex;
	height: 100%;
	flex-shrink: 0;

	color: var(--black);
	font-family: ${p => p.theme.typography.ff.stick};
	font-size: ${p => p.theme.typography.fs.base};
	text-decoration: none;

	${p => min.sm`
		.sergio {
			font-size: ${p.theme.typography.fs.lg};
		}
		font-size: ${p.theme.typography.fs.h3};
	`}

	${min.sm`
		height: 40px;
	`}
	${min.md`
		height: 100%;
	`}

	> span {
		display: none;

		> span {
			transition: opacity ease-in-out 0.3s;
		}

		.sergio {
			text-transform: uppercase;
			font-weight: ${p => p.theme.typography.fw.bold};

			transition: margin ease-in-out 0.2s;
		}

		${min.xs`
			display: inline-flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
		`}
	}

	&.collapsed {
		> span > span {
			${min.sm`
				opacity: 0;
				pointer-events: none;
				transition: all ease-in 0.3s;
			`}

			&.sergio {
				display: inline-flex;
				align-self: flex-start;

				${min.sm`
					opacity: 1;
					margin-top: 25px;	
				`}
			}
		}
	}

	img {
		height: 100%;
	}
`

const Logo: React.FC<{ collapsed: boolean }> = ({ collapsed }) => (
	<StyledLogo href="#" className={collapsed ? 'collapsed' : ''}>
		<img src="https://d33wubrfki0l68.cloudfront.net/8e679f4eacde819d4909fbad17a6aa8b5786dd8b/49226/logo.png"></img>
		<span>
			<span className="sergio">Sergio Kuraitis</span>
			<span>Naturligt Design</span>
		</span>
	</StyledLogo>
)

export default Logo
