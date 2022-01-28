import { css, DefaultTheme, SimpleInterpolation, ThemedCssFunction } from 'styled-components'
import { theme } from './Theme'

interface Accumulator {
	[key: string]: any
}

/*
Media queries:

import { min } from '../../styles/mixins'

const Component = styled.p`
	${p => min.md`
		font-size: ${p.theme.typography.fs.h1};
	`}

	${min.md`
		color: var(--positive);
	`}
`

*/

export const min = Object.keys(theme.breakpoints).reduce((accumulator: Accumulator, label: string) => {
	accumulator[label] = (strings: string[], ...values: SimpleInterpolation[]) => {
		let str = ''
		strings.forEach((s: string, i: number) => {
			str += s + (values[i] || '')
		})

		return css`
			@media (min-width: ${(theme.breakpoints as Accumulator)[label]}) {
				${css`
					${str}
				`};
			}
		`
	}
	return accumulator
}, {}) as {
	[key in keyof DefaultTheme['breakpoints']]: (key: TemplateStringsArray) => ThemedCssFunction<DefaultTheme>
}

export const max = Object.keys(theme.breakpoints).reduce((accumulator: Accumulator, label: string) => {
	accumulator[label] = (strings: string[], ...values: SimpleInterpolation[]) => {
		let str = ''
		strings.forEach((s: string, i: number) => {
			str += s + (values[i] || '')
		})

		return css`
			@media (max-width: ${(theme.breakpoints as Accumulator)[label]}) {
				${css`
					${str}
				`};
			}
		`
	}
	return accumulator
}, {}) as {
	[key in keyof DefaultTheme['breakpoints']]: (key: TemplateStringsArray) => ThemedCssFunction<DefaultTheme>
}
