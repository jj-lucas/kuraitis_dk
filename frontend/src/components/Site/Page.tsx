import React, { useState } from 'react'
import styled from 'styled-components'
import { Meta, Header, MenuDrawer, Footer } from '@/components'
import { HeaderCollapsedContext, SideMenuContext } from '@/contexts'

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
					<Footer />
					<MenuDrawer />
				</SideMenuContext.Provider>
			</HeaderCollapsedContext.Provider>
		</StyledPage>
	)
}

export { Page, HeaderCollapsedContext, SideMenuContext }
