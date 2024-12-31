import { useState } from 'react'

export const useAlert = () => {
	const [isShow, setIsShow] = useState(false)

	const open = () => setIsShow(true)
	const close = () => setIsShow(false)

	return {
		isShow,
		open,
		close,
	}
}
