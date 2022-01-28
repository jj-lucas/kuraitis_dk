import React from 'react'
import { GatsbyBrowser, GatsbySSR } from 'gatsby'
import { Page, PageAdmin, GlobalStyles } from '../components'
import CssBaseline from '@mui/material/CssBaseline'

type WrapPageElement = GatsbyBrowser['wrapPageElement'] | GatsbySSR['wrapPageElement']

export const wrapPageElement: WrapPageElement = ({ element, props }: any) => {
	const path = props.location.pathname ? props.location.pathname : ''
	if (path.includes('/admin')) {
		return (
			<>
				<CssBaseline />
				<PageAdmin {...props}>{element}</PageAdmin>
			</>
		)
	}

	return (
		<>
			<GlobalStyles />
			<Page {...props}>{element}</Page>
		</>
	)
}
