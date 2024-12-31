import { useEffect, useState } from 'react'

export const useMediaQuery = (media: string) => {
	const [value, setValue] = useState(false)

	useEffect(() => {
		function onChange(event: any) {
			setValue(event.matches)
		}

		const result = window.matchMedia(media)

		result.addEventListener('change', onChange)

		setValue(result.matches)

		return () => result.removeEventListener('change', onChange)
	}, [media])

	return value
}
