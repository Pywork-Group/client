import Win from '@/components/parts/win/Win'
import Skeleton from '@/components/ui/elements/skeleton/Skeleton'
import { useLiveWins } from '@/hooks/api/live/useLiveWins.hook'
import type { IHeaderWins } from '@/shared/interfaces/elements/header/header.interface'
import type { FC } from 'react'
import styles from './HeaderWins.module.scss'

const HeaderWins: FC<IHeaderWins> = ({
	user,
	isLoading: isUserLoading,
	isRussian,
}) => {
	const { wins, isFetched, isLoading } = useLiveWins(user?.id)

	if (isFetched && wins.length === 0) return null

	return (
		<div className={styles.live}>
			<ul className={styles.wins}>
				{isLoading || isUserLoading
					? Array.from(
							{
								length: 12,
							},
							(_, index) => (
								<li key={index} className={styles.skeleton}>
									<Skeleton />
								</li>
							)
					  )
					: wins.map((win, index) => (
							<Win
								key={index}
								className={styles.win}
								win={win}
								isRussian={isRussian}
							/>
					  ))}
			</ul>
		</div>
	)
}

export default HeaderWins
