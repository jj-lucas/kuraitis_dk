import React from 'react'
import { throttle } from 'lodash'
import { theme } from '../styles'
import { DefaultTheme } from 'styled-components'

export const useViewportSize = () => {
	const [size, setSize] = React.useState<keyof DefaultTheme['breakpoints']>('xs')

	React.useEffect(() => {
		const doSizing = throttle(() => {
			Object.keys(theme.breakpoints)
				.reverse()
				.some(key => {
					const breakpoint = key as keyof DefaultTheme['breakpoints']
					if (getMatchMedia(`min-width: ${theme.breakpoints[breakpoint]}`)) {
						setSize(breakpoint)
						return true
					}
				})
		}, 50)

		doSizing()

		window.addEventListener('resize', doSizing)

		return () => {
			window.removeEventListener('resize', doSizing)
		}
	}, [])

	return {
		size,
		matchesSize: (options: (keyof DefaultTheme['breakpoints'] | undefined)[]) => options.includes(size),
	}
}

export function getMatchMedia(query: string) {
	if (typeof window !== 'undefined' && typeof (window as any).matchMedia === 'function') {
		return window.matchMedia(`(${query})`).matches
	}

	return false
}
