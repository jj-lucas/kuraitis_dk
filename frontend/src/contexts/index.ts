import React, { createContext } from 'react'

const LanguageContext = createContext('da')

const HeaderCollapsedContext = createContext({
	collapsed: false,
	setCollapsed: (collapsed: boolean) => {},
})

const SideMenuContext = createContext({
	expanded: false,
	setExpanded: (expanded: boolean) => {},
})

export { LanguageContext, HeaderCollapsedContext, SideMenuContext }
