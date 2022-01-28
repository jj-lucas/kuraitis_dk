import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
	--lightGray: #f8f8f8;
	--lightGrayEmphasized: #e5e3e3;
	--lightishGray: #aaaaaa;
	--gray: #1a1a1a99;
	--darkGray: #1a1a1a;
	--black: #393939;
	--blue: #0394fc;
	--negative: #ff421e;
	--positive: #9adb60;
	--info: #fbd01e;
	--warning: #ffad1e;
	--tan: #de905f;
	--lightTan: #de905f85;
}
html {
	font-size: 10px;
}
body {
	background-color: var(--lightGray);
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
}
h4 {
	font-size: ${props => props.theme.typography.fs.h4};
}
p, ul {
	max-width: ${props => props.theme.maxLengthLine.xs};
	
	@media (min-width: ${props => props.theme.breakpoints.sm}) {
		max-width: ${props => props.theme.maxLengthLine.sm};
	}
	@media (min-width: ${props => props.theme.breakpoints.md}) {
		max-width: ${props => props.theme.maxLengthLine.md};
	}
	@media (min-width: ${props => props.theme.breakpoints.lg}) {
		max-width: ${props => props.theme.maxLengthLine.lg};
	}
	@media (min-width: ${props => props.theme.breakpoints.xl}) {
		max-width: ${props => props.theme.maxLengthLine.sm};
	}
}
`
