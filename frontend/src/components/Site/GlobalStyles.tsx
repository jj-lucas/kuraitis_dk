import { createGlobalStyle } from 'styled-components'
import { min } from '@/styles'

export const GlobalStyles = createGlobalStyle`
:root {
	--white: #FFFDFD;
	--lightGray: #CBD2D0;
	--spaceCadet: #29335C;
	--liverChestnut: #856A5D;
	--rifleGreen: #3E442B;
	
	--blue: var(--spaceCadet);
	--green: var(--rifleGreen);
	--brown: var(--liverChestnut);

	--maxWidth: ${p => p.theme.maxWidth.xs};
	
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
	box-shadow: 0 1px var(--blue);
	padding-bottom: 0x;
}
`
