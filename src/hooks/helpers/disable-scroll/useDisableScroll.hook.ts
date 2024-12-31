import { useEffect } from 'react'

export const useDisableScroll = () => {
	useEffect(() => {
		const originalOverflow = document.body.style.overflow
		const originalPaddingRight = document.body.style.paddingRight

		const scrollbarWidth =
			window.innerWidth - document.documentElement.clientWidth

		document.body.style.overflow = 'hidden'
		document.body.style.paddingRight = `${scrollbarWidth}px`

		return () => {
			document.body.style.overflow = originalOverflow
			document.body.style.paddingRight = originalPaddingRight
		}
	}, [])
}
