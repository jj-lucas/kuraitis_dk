import React, { createContext } from 'react'
import { GatsbyBrowser, GatsbySSR } from 'gatsby'
import { Page, PageAdmin, GlobalStyles } from '../components'
import CssBaseline from '@mui/material/CssBaseline'
import { LanguageContext } from '@/contexts'

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
		<LanguageContext.Provider value={'da'}>
			<GlobalStyles />
			<Page {...props}>{element}</Page>
		</LanguageContext.Provider>
	)
}
