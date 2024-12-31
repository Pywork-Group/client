'use client'

import Skeleton from '@/components/ui/elements/skeleton/Skeleton'
import Steam from '@/components/ui/elements/steam/Steam'
import { PUBLIC_ROUTE } from '@/constants/route/routes.constants'
import type { IHeaderUser } from '@/shared/interfaces/elements/header/header.interface'
import { formatPrice } from '@/utils/formats/price/format-price.util'
import { HandCoins } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './HeaderUser.module.scss'
import HeaderUserProfile from './profile/HeaderUserProfile'

const HeaderUser: FC<IHeaderUser> = ({ user, isLoading, translate }) => {
	return (
		<div className={styles.user}>
			{isLoading ? (
				<Skeleton className={styles.skeleton} />
			) : user ? (
				<>
					<Link className={styles.mobile} href={PUBLIC_ROUTE.DEPOSIT}>
						{formatPrice(user.balance, user.currency)}
					</Link>
					<Link className={styles.deposit} href={PUBLIC_ROUTE.DEPOSIT}>
						<HandCoins />
					</Link>
					<HeaderUserProfile user={user} />
				</>
			) : (
				<Steam className={styles.auth}>{translate('steam')}</Steam>
			)}
		</div>
	)
}

export default HeaderUser
