import React from 'react'
import { GatsbyBrowser, GatsbySSR } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme/Theme'
import { Helmet } from 'react-helmet'

type WrapRootElement = GatsbyBrowser['wrapRootElement'] | GatsbySSR['wrapRootElement']

export const wrapRootElement: WrapRootElement = ({ element, props }: any) => {
	return (
		<div {...props}>
			<Helmet>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Helmet>
			<ThemeProvider theme={theme}>{element}</ThemeProvider>
		</div>
	)
}
