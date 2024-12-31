import type { IPagination } from '@/shared/interfaces/elements/pagination/pagination.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { FC } from 'react'
import styles from './Pagination.module.scss'

const Pagination: FC<IPagination> = ({
	page,
	count,
	prev,
	next,
	goTo,
	className,
}) => {
	const pagesToShow = () => {
		const pages: (number | string)[] = []

		if (count <= 5) {
			for (let i = 1; i <= count; i++) {
				pages.push(i)
			}
		} else {
			const startPage = Math.max(1, page - 1)
			const endPage = Math.min(count, page + 1)

			if (page <= 3) {
				for (let i = 1; i <= 4; i++) pages.push(i)
				pages.push('...')
				pages.push(count)
			} else if (page >= count - 2) {
				pages.push(1)
				pages.push('...')
				for (let i = count - 3; i <= count; i++) pages.push(i)
			} else {
				pages.push(1)
				pages.push('...')
				for (let i = startPage; i <= endPage; i++) pages.push(i)
				pages.push('...')
				pages.push(count)
			}
		}

		return pages
	}

	return (
		<ul className={formatClassName([styles.list, className])}>
			{page > 1 && (
				<li>
					<button className={styles.button} onClick={prev}>
						<ChevronLeft />
					</button>
				</li>
			)}
			{pagesToShow().map((p, index) =>
				typeof p === 'number' ? (
					<li key={index}>
						<button
							className={formatClassName([
								styles.button,
								page === p ? styles.picked : undefined,
							])}
							onClick={() => goTo(p)}
						>
							{p}
						</button>
					</li>
				) : (
					<li key={index} className={styles.dots}>
						{p}
					</li>
				)
			)}
			{page < count && (
				<li>
					<button className={styles.button} onClick={next}>
						<ChevronRight />
					</button>
				</li>
			)}
		</ul>
	)
}

export default Pagination
