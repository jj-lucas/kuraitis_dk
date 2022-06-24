import { createGlobalStyle } from 'styled-components'
import { min } from '@/styles'
import { lighten, darken } from 'polished'

const paletteColors = {
	spaceCadet: '#29335C',
	liverChestnut: '#856A5D',
	rifleGreen: '#3E442B',
}

const colors = {
	blue: paletteColors.spaceCadet,
	brown: paletteColors.liverChestnut,
	green: paletteColors.rifleGreen,
}

export const GlobalStyles = createGlobalStyle`
:root {
	--white: #FFFDFD;
	--lightGray: #CBD2D0;
	
	--gray30: ${darken(0.3, '#FFF')};
	--gray50: ${darken(0.5, '#FFF')};
	--gray100: ${darken(1, '#FFF')};

	--blue: ${colors.blue};
	--lightBlue: ${lighten(0.5, colors.blue)};
	--darkBlue: ${darken(0.2, colors.blue)};
	--green: ${colors.green};
	--lightGreen: ${lighten(0.5, colors.green)};
	--darkGreen: ${darken(0.2, colors.green)};
	--brown: ${colors.brown};
	--lightBrown: ${lighten(0.5, colors.brown)};
	--darkBrown: ${darken(0.2, colors.brown)};

	--maxWidth: ${p => p.theme.maxWidth.xs};
	
	${p => min.sm`
		--maxWidth: ${p => p.theme.maxWidth.sm};
	`}
	${p => min.md`
		--maxWidth: ${p => p.theme.maxWidth.md};
	`}
	${p => min.lg`
		--maxWidth: ${p => p.theme.maxWidth.lg};
	`}
	${p => min.xl`
		--maxWidth: ${p => p.theme.maxWidth.xl};
	`}
}
:root {
	
}
html {
	font-size: 10px;
}
body {
	margin: 0;
	font-family: ${props => props.theme.typography.ff.noto};
	font-weight: ${props => props.theme.typography.fw.regular};
	font-style: normal;
	font-size: ${props => props.theme.typography.fs.base};
	line-height: 1.5;
}
h1 {
	font-size: ${props => props.theme.typography.fs.lg};
		
	@media (min-width: ${props => props.theme.breakpoints.sm}) {
		font-size: ${props => props.theme.typography.fs.h1};
	}
}
h2 {
	font-size: ${props => props.theme.typography.fs.h2};
}
h3 {
	font-size: ${props => props.theme.typography.fs.h3};
	margin-bottom: ${props => props.theme.spacing.sm};
}
h4 {
	font-size: ${props => props.theme.typography.fs.h4};
}
p, ul {
	max-width: var(--maxWidth);
}

a {
	color: var(--blue);
	text-decoration: none;
	border-bottom: 1px dotted var(--blue);
	padding-bottom: 0x;
	transition: color ${p => p.theme.transition.type.easeInOut} ${p => p.theme.transition.duration.xs};

	&:hover {
		color: var(--lightBlue);
	}

	&.button {
		color: inherit;	
		border-bottom: 0 none;
	}
}

button.primary {
	display: block;
	width: 50%;
	padding: 1rem;

	background-color: var(--brown);
	border: 0 none;
	border-radius: 5px;

	text-transform: uppercase;
	font-weight: ${p => p.theme.typography.fw.bold};
	color: white;

	transition: background-color ${p => p.theme.transition.type.easeInOut} ${p => p.theme.transition.duration.sm};
	cursor: pointer;

	&:hover {
		background-color: var(--darkBrown);
	}
}
`
