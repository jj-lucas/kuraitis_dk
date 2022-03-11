import { createGlobalStyle } from 'styled-components'
import { min } from '@/styles'

export const GlobalStyles = createGlobalStyle`
:root {
	--lightGray: #f8f8f8;
	--lightGrayEmphasized: #e4e4e4;
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

	--maxWidth: ${p => p.theme.maxWidth.xs};
	${p => min.sm`
		--maxWidth:  ${p.theme.maxWidth.sm}
	`}
	${p => min.md`
		--maxWidth:  ${p.theme.maxWidth.md}
	`}
	${p => min.lg`
		--maxWidth:  ${p.theme.maxWidth.lg}
	`}
	${p => min.xl`
		--maxWidth:  ${p.theme.maxWidth.xl}
	`}
	
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
`
