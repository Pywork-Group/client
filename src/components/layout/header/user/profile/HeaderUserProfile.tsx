import Image from '@/components/ui/common/image/Image'
import { PUBLIC_ROUTE } from '@/constants/route/routes.constants'
import type { ICurrentUserExist } from '@/shared/interfaces/api/user/user.interface'
import { formatPrice } from '@/utils/formats/price/format-price.util'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './HeaderUserProfile.module.scss'

const HeaderUserProfile: FC<ICurrentUserExist> = ({ user }) => {
	return (
		<Link className={styles.profile} href={PUBLIC_ROUTE.USER(user.id)}>
			<span className={styles.balance}>
				<span className={styles.username}>{user.username}</span>
				<span className={styles.coins}>
					{formatPrice(user.balance, user.currency)}
				</span>
			</span>
			<Image
				priority
				src={user.avatarPath}
				width={50}
				height={50}
				title="Char1q"
				alt="Char1q"
			/>
		</Link>
	)
}

export default HeaderUserProfile
