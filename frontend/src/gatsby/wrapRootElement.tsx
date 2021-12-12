import React from 'react'
import { GatsbyBrowser, GatsbySSR } from 'gatsby'

type WrapRootElement = GatsbyBrowser['wrapRootElement'] | GatsbySSR['wrapRootElement']

export const wrapRootElement: WrapRootElement = ({ element, props }: any) => {
	return (
		<div {...props}>
			<h1>Root provider</h1>
			{element}
		</div>
	)
}
