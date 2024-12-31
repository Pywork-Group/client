import Steam from '@/components/ui/elements/steam/Steam'
import { PUBLIC_ROUTE } from '@/constants/route/routes.constants'
import type { ICaseInformer } from '@/shared/interfaces/elements/case/case.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import { formatPrice } from '@/utils/formats/price/format-price.util'
import { HandCoins } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './CaseRollInformer.module.scss'

const CaseRollInformer: FC<ICaseInformer> = ({
	isLoading,
	user,
	price,
	translate,
}) => {
	if (isLoading) return null

	const isAuth = !user

	const heading = isAuth
		? translate('unauthorized.heading')
		: translate('enough.heading', {
				price: formatPrice(price, user.currency),
				balance: formatPrice(price - user.balance, user.currency),
		  })
	const description = isAuth
		? translate('unauthorized.text')
		: translate('enough.text')
	const button = isAuth
		? translate('unauthorized.button')
		: translate('enough.button')

	return (
		<div className={styles.informer}>
			<div
				className={formatClassName([
					styles.info,
					isAuth ? styles.auth : styles.enough,
				])}
			>
				<p className={styles.heading}>{heading}</p>
				<p className={styles.description}>{description}</p>
			</div>
			{!user ? (
				<Steam className={styles.steam}>{button}</Steam>
			) : (
				<Link className={styles.deposit} href={PUBLIC_ROUTE.DEPOSIT}>
					{button}
					<HandCoins />
				</Link>
			)}
		</div>
	)
}

export default CaseRollInformer
