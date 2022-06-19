import styled from 'styled-components'

const Parallax = styled.div<{ src: string }>`
	margin-top: -100vh;
	width: 100vw;
	height: 100vh;
	position: -webkit-sticky; /* Safari */
	position: sticky;
	top: 0;
	z-index: 0;
	background-image: url(${p => p.src});
	background-position: left top;
	background-repeat: no-repeat;
	background-size: cover;
`

export default Parallax
