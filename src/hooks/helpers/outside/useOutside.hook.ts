import { useEffect, useRef } from 'react'

export const useOutside = <T extends HTMLElement>(close: () => void) => {
	const buttonRef = useRef<HTMLButtonElement>(null)
	const ref = useRef<T>(null)

	const handleClickOutside = (event: any) => {
		if (!ref.current || !buttonRef.current) return

		if (
			!ref.current.contains(event.target) &&
			!buttonRef.current.contains(event.target)
		) {
			close()
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})

	return { ref, buttonRef }
}
