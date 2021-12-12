import React from 'react'
import { GatsbyBrowser, GatsbySSR } from 'gatsby'
import { Layout } from '../components'

type WrapPageElement = GatsbyBrowser['wrapPageElement'] | GatsbySSR['wrapPageElement']

export const wrapPageElement: WrapPageElement = ({ element, props }: any) => {
	return <Layout {...props}>{element}</Layout>
}
