import { Origin } from '@/__generated__/output'
import Image from '@/components/ui/common/image/Image'
import CaseIcon from '@/components/ui/icons/CaseIcon'
import { PUBLIC_ROUTE } from '@/constants/route/routes.constants'
import type { IWin } from '@/shared/interfaces/api/win/win.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './Win.module.scss'

const Win: FC<IWin> = ({ win, isRussian, className }) => {
	const name = isRussian ? win.nameRu : win.nameEn

	return (
		<li className={formatClassName([styles.win, className])}>
			<Link
				className={formatClassName([styles.link, styles[win.rarity]])}
				href={PUBLIC_ROUTE.USER(win.user.id)}
			>
				<div className={styles.front}>
					<Image
						src={win.imagePath}
						width={110}
						height={82}
						alt={name}
						title={name}
					/>
					<span className={styles.name}>{name}</span>
				</div>
				<div className={styles.back}>
					{win.origin === Origin.Case ? (
						win.case ? (
							<Image
								className={styles.case}
								src={win.case.imagePath}
								width={135}
								height={135}
								alt={name}
								title={name}
							/>
						) : (
							<CaseIcon className={styles.empty} />
						)
					) : (
						win.origin === Origin.Contract && (
							<Image
								className={styles.contract}
								src="/storage/contract/contract.png"
								width={100}
								height={100}
								alt={name}
								title={name}
							/>
						)
					)}
					<div className={styles.user}>
						<Image
							src={win.user.avatarPath}
							width={36}
							height={36}
							alt={win.user.username}
							title={win.user.username}
						/>
						<span className={styles.username}>{win.user.username}</span>
					</div>
				</div>
			</Link>
		</li>
	)
}

export default Win
