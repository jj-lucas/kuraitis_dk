import React from 'react'
import { GatsbyBrowser, GatsbySSR } from 'gatsby'

import { ThemeProvider } from 'styled-components'
import { theme } from '../theme/Theme'

type WrapRootElement = GatsbyBrowser['wrapRootElement'] | GatsbySSR['wrapRootElement']

export const wrapRootElement: WrapRootElement = ({ element, props }: any) => {
	return (
		<div {...props}>
			<h1>Root provider</h1>
			<ThemeProvider theme={theme}>{element}</ThemeProvider>
		</div>
	)
}
