import React from 'react'
import { GatsbyBrowser, GatsbySSR } from 'gatsby'
import { Page, PageAdmin } from '../components'

type WrapPageElement = GatsbyBrowser['wrapPageElement'] | GatsbySSR['wrapPageElement']

export const wrapPageElement: WrapPageElement = ({ element, props }: any) => {
	const path = props.location.pathname ? props.location.pathname : ''
	if (path.includes('/admin')) {
		return <PageAdmin {...props}>{element}</PageAdmin>
	}

	return <Page {...props}>{element}</Page>
}
