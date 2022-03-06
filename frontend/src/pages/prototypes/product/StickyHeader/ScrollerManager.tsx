import React, { useState, useEffect } from 'react'
import { theme } from '@/styles'
import { throttle } from 'lodash'

const px2num = (n: string): number => {
	return parseInt(n.replace('px', ''), 10)
}

const ScrollerManager: React.FC<{
	collapsed: boolean
	setCollapsed: (next: boolean) => void
}> = ({ collapsed, setCollapsed }) => {
	const [scrollPosition, setScrollPosition] = useState(window.pageYOffset)

	const threshold = px2num(theme.sizes.headerCollapse)

	useEffect(() => {
		const handleScroll = throttle(() => {
			const position = window.pageYOffset
			setScrollPosition(position)
		}, 50)

		window.addEventListener('scroll', handleScroll, { passive: true })

		handleScroll()

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		if (collapsed) {
			if (scrollPosition < threshold) {
				setCollapsed(false)
			}
		} else {
			if (scrollPosition > threshold) {
				setCollapsed(true)
			}
		}
	}, [scrollPosition])

	return null
}

export default ScrollerManager
