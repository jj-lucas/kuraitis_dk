import React, { createContext, useState } from 'react'
import styled from 'styled-components'
import { Meta } from '../../components'
import Header from './Header'

export const CollapseHeaderContext = createContext({
	collapsed: false,
	setCollapsed: (collapsed: boolean) => {},
})

const StyledPage = styled.div``

const Page: React.FC = props => {
	const [collapsed, setCollapsed] = useState(false)

	return (
		<StyledPage className={collapsed ? 'collapsed' : ''}>
			<CollapseHeaderContext.Provider value={{ collapsed, setCollapsed: setCollapsed as any }}>
				<Meta />
				<Header collapsed={collapsed} />
				<div>{props.children}</div>
			</CollapseHeaderContext.Provider>
		</StyledPage>
	)
}

export { Page }
