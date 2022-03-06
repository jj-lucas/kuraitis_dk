import ScrollerManager from '@/pages/prototypes/product/StickyHeader/ScrollerManager'
import React, { createContext, useState } from 'react'
import styled from 'styled-components'
import { Meta } from '../../components'

export const ScrollContext = createContext(false)

const StyledPage = styled.div``

const Page: React.FC = props => {
	const [collapsed, setCollapsed] = useState(false)

	return (
		<StyledPage className={collapsed ? 'collapsed' : ''}>
			<ScrollerManager collapsed={collapsed} setCollapsed={setCollapsed} />
			<ScrollContext.Provider value={collapsed}>
				<Meta />
				<div>{props.children}</div>
			</ScrollContext.Provider>
		</StyledPage>
	)
}

export { Page }
