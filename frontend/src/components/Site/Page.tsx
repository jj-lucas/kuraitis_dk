import ScrollerManager from '@/pages/prototypes/StickyHeader/ScrollerManager'
import React, { createContext, useState } from 'react'
import styled from 'styled-components'
import { Header, Meta } from '../../components'
import { min, max } from '@/styles'

export const ScrollContext = createContext(false)

const StyledPage = styled.div`
	&.collapsed {
		--status: ${p => p.theme.sizes.headerStatusHeight};
		--innerExpanded: ${p => p.theme.sizes.headerInnerHeightExpanded};
		--innerCollapsed: ${p => p.theme.sizes.headerInnerHeightCollapsed};
		--gap: ${p => p.theme.sizes.headerGap};
		--smallGap: calc((var(--innerExpanded) - var(--innerCollapsed)) / 2);

		${min.sm`
			padding-top: calc(var(--status) + var(--innerExpanded));
		`}
	}
`

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
