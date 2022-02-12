import React, { useState, useEffect } from 'react'
import { theme } from '@/styles'
import { throttle } from 'lodash'
import { useViewportSize } from '@/utils'

const px2num = (n: string): number => {
	return parseInt(n.replace('px', ''), 10)
}

const ScrollerManager: React.FC<{
	collapsed: boolean
	setCollapsed: (next: boolean) => void
}> = ({ collapsed, setCollapsed }) => {
	const [scrollPosition, setScrollPosition] = useState(0)
	const [switching, setSwitching] = useState(false)
	const { matchesSize } = useViewportSize()

	const thresholdCollapse = px2num(theme.sizes.headerGap)
	const thresholdExpand = px2num(theme.sizes.headerStatusHeight) + px2num(theme.sizes.headerInnerHeightExpanded)

	useEffect(() => {
		const handleScroll = throttle(() => {
			const position = window.pageYOffset
			setScrollPosition(position)
		}, 20)

		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		if (!switching) {
			if (collapsed) {
				if (scrollPosition < thresholdExpand) {
					setSwitching(true)
					setCollapsed(false)
				}
			} else {
				if (scrollPosition - thresholdCollapse * 2 > 0) {
					setSwitching(true)
					setCollapsed(true)
					setSwitching(false)
				}
			}
		}
	}, [scrollPosition])

	useEffect(() => {
		if (switching && !collapsed) {
			if (!matchesSize(['xs'])) {
				window.scrollTo(0, thresholdCollapse * 2)
			}
			setSwitching(false)
		}
	}, [collapsed])

	return null
}

export default ScrollerManager
