import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export const usePagination = (perPage: number) => {
	const searchParams = useSearchParams()

	const [page, setPage] = useState<number>(1)

	useEffect(() => {
		const paramsPage = searchParams.get('page')

		if (!paramsPage) return

		setPage(+paramsPage)
	}, [searchParams])

	const prev = () => setPage(page - 1)
	const next = () => setPage(page + 1)
	const goTo = (page: number) => setPage(page)

	return {
		page,
		setPage,
		perPage,
		prev,
		next,
		goTo,
	}
}
