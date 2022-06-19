import React, { createContext, useState } from 'react'
import styled from 'styled-components'
import { Meta, Header, MenuDrawer } from '@/components'

const HeaderCollapsedContext = createContext({
	collapsed: false,
	setCollapsed: (collapsed: boolean) => {},
})

const SideMenuContext = createContext({
	expanded: false,
	setExpanded: (expanded: boolean) => {},
})

const StyledPage = styled.div``

const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [headerCollapsed, setHeaderCollapsed] = useState(false)
	const [sideMenuExpanded, setSideMenuExpanded] = useState(false)

	return (
		<StyledPage className={headerCollapsed ? 'collapsed' : ''}>
			<Meta />
			<HeaderCollapsedContext.Provider value={{ collapsed: headerCollapsed, setCollapsed: setHeaderCollapsed }}>
				<SideMenuContext.Provider value={{ expanded: sideMenuExpanded, setExpanded: setSideMenuExpanded }}>
					<Header />
					<div>{children}</div>
					<MenuDrawer />
				</SideMenuContext.Provider>
			</HeaderCollapsedContext.Provider>
		</StyledPage>
	)
}

export { Page, HeaderCollapsedContext, SideMenuContext }
