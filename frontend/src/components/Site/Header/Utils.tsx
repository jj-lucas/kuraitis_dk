import React from 'react'
import styled from 'styled-components'

const StyledUtils = styled.div`
	page-break-after: always; /* CSS 2.1 syntax */
	break-after: always; /* New syntax */

	width: 20%;
`
const Utils: React.FC = () => <StyledUtils>Cart</StyledUtils>

export { Utils }
