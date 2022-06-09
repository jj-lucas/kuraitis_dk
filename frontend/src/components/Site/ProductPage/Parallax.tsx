import styled from 'styled-components'

const Parallax = styled.div<{ src: string }>`
	/* The image used */
	background-image: url(${p => p.src});

	/* Set a specific height */
	min-height: 500px;

	/* Create the parallax scrolling effect */
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`
export default Parallax
