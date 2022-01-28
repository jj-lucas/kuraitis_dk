import { css } from 'styled-components'
import { theme } from './Theme'

interface Accumulator {
	[key: string]: any
}

enum Breakpoints {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
}

/*
Usage:

import { mq } from '../../styles/mixins'

const Component = styled.p`
	${mq.md`
		color: red;
	`}
`
*/

export const mq = Object.keys(theme.breakpoints).reduce((accumulator: Accumulator, label: string) => {
	accumulator[label] = (content: string) => css`
		@media (min-width: ${(theme.breakpoints as Accumulator)[label]}) {
			${css`
				${content}
			`};
		}
	`
	return accumulator
}, {}) as {
	[key in Breakpoints]: any
}

export const test = Object.keys(theme.breakpoints).reduce((accumulator: Accumulator, label: string) => {
	accumulator[label] = (strings: string[], ...values: any) => {
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
	[key in Breakpoints]: any
}

export const mqMax = Object.keys(theme.breakpoints).reduce((accumulator: Accumulator, label: string) => {
	accumulator[label] = (content: TemplateStringsArray) => css`
		@media (max-width: ${(theme.breakpoints as Accumulator)[label]}) {
			${css(content)};
		}
	`
	return accumulator
}, {}) as {
	[key in Breakpoints]: any
}
