import React, { createContext } from 'react'
import { ProductPageQuery } from '../../graphql-types'

const LanguageContext = createContext('da')

const HeaderCollapsedContext = createContext({
	collapsed: false,
	setCollapsed: (collapsed: boolean) => {},
})

const SideMenuContext = createContext({
	expanded: false,
	setExpanded: (expanded: boolean) => {},
})

const ProductContext =
	createContext<NonNullable<NonNullable<NonNullable<ProductPageQuery['site']>['siteMetadata']>['mocks']>['product']>(
		undefined
	)

export { LanguageContext, HeaderCollapsedContext, SideMenuContext, ProductContext }
