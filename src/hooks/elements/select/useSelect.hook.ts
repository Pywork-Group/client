import { useOutside } from '@/hooks/helpers/outside/useOutside.hook'
import { useState } from 'react'

export const useSelect = () => {
	const [isShow, setIsShow] = useState(false)

	const toggle = () => setIsShow(!isShow)

	const { ref, buttonRef } = useOutside<HTMLUListElement>(() =>
		setIsShow(false)
	)

	return {
		ref,
		buttonRef,
		isShow,
		toggle,
	}
}
