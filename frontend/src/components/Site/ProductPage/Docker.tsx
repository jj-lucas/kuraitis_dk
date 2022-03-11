import React, { useEffect, useState } from 'react'
import { throttle } from 'lodash'
import { theme } from '@/styles'
import { rem2num } from '@/utils'

const Docker: React.FC<{ docked: boolean; setDocked: (next: boolean) => void }> = ({ docked, setDocked }) => {
	const [scrollPosition, setScrollPosition] = useState(0)

	useEffect(() => {
		if (window) {
			setScrollPosition(window.pageYOffset)
		}

		const handleScroll = throttle(() => {
			const position = window.pageYOffset
			setScrollPosition(position)
		}, 50)

		window.addEventListener('scroll', handleScroll, { passive: true })

		setTimeout(handleScroll, 10) // race condition

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		const top = document?.getElementById('docked')?.getBoundingClientRect()
		const end = document?.getElementById('end')?.getBoundingClientRect()
		if (end?.top && top?.bottom) {
			if (!docked) {
				// content floating, check when to dock
				if (end.top - top.bottom <= 0) {
					setDocked(true)
				}
			} else {
				// content docked, check when to undock
				if (top.top > rem2num(theme.sizes.productPageContentStart)) {
					setDocked(false)
				}
			}
		}
	}, [scrollPosition])

	return <div id="end" />
}

export { Docker }
