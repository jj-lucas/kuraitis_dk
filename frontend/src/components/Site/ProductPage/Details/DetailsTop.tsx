import React from 'react'
import styled from 'styled-components'

const StyledDetailsTop = styled.div``
const DetailsTop: React.FC = () => (
	<StyledDetailsTop>
		<small className="breadcrumbs">Lorem {'>'} Ipsum</small>
		<h1>Lorem ipsum dolor sit amet</h1>
		<p>
			<span className="price">430,- DKK</span>
		</p>
	</StyledDetailsTop>
)

export default DetailsTop
