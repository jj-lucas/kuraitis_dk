import React, { useContext, useEffect, useState } from 'react'
import { throttle } from 'lodash'
import { HeaderCollapsedContext } from '@/components'

const Docker: React.FC = () => {
	const [scrollPosition, setScrollPosition] = useState(0)
	const [docked, setDocked] = useState(false)

	const { setCollapsed } = useContext(HeaderCollapsedContext)

	useEffect(() => {
		setCollapsed(docked)
	}, [docked])

	useEffect(() => {
		if (window) {
			setScrollPosition(window.pageYOffset)
		}

		const handleScroll = throttle(() => {
			const position = Math.round(window.pageYOffset)
			setScrollPosition(position)
		}, 50)

		window.addEventListener('scroll', handleScroll, { passive: true })

		setTimeout(handleScroll, 10) // race condition

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const checkDocking = () => {
		const top = document?.getElementById('docked')?.getBoundingClientRect()
		const end = document?.getElementById('end')?.getBoundingClientRect()

		if (end?.top && top?.bottom) {
			if (!docked) {
				// content floating, check when to dock
				if (end.top - top.bottom <= 0) {
					document?.getElementById('docked')?.classList.add('docked')
					setDocked(true)
				}
			} else {
				// content docked, check when to undock
				if (top.top > window.innerHeight / 2 - top.height / 2) {
					document?.getElementById('docked')?.classList.remove('docked')
					setDocked(false)
				}
			}
		}
	}

	useEffect(() => {
		checkDocking()
	}, [scrollPosition])

	useEffect(() => {
		setTimeout(checkDocking, 500) // race condition
	}, [scrollPosition])

	return <div id="end" />
}

export { Docker }
