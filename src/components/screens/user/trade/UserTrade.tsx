import Loader from '@/components/ui/elements/loader/Loader'
import { STEAM_ROUTE } from '@/constants/route/routes.constants'
import { useTrade } from '@/hooks/api/trade/useTrade.hook'
import type { IUserTrade } from '@/shared/interfaces/elements/user/user.interface'
import { Bone, Link2 } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './UserTrade.module.scss'

const UserTrade: FC<IUserTrade> = ({ tradeLink, translate, language }) => {
	const { isLoading, onChange, onSubmit, value } = useTrade({
		tradeLink,
		language,
	})

	return (
		<div className={styles.box}>
			<div className={styles.top}>
				<div className={styles.fill}>
					<div className={styles.label}>
						<Link2 />
						{translate('trade.link')}
					</div>
					<Link
						className={styles.find}
						href={STEAM_ROUTE.TRADE_LINK}
						target="_blank"
					>
						{translate('trade.find')}
					</Link>
				</div>
				<div className={styles.note}>
					<span>
						<Bone />
						{translate('trade.scammer')}
					</span>
					<div className={styles.info}>{translate('trade.info')}</div>
				</div>
			</div>
			<form className={styles.form} onSubmit={onSubmit}>
				<input
					className={styles.field}
					type="text"
					onChange={onChange}
					value={value}
					placeholder="https://steamcommunity.com/tradeoffer/new/?partner=xxxxxxxxxx&token=yyyyyyyy"
				/>
				{isLoading ? (
					<div className={styles.save}>
						<Loader className={styles.loader} />
					</div>
				) : (
					<button className={styles.save}>{translate('trade.save')}</button>
				)}
			</form>
		</div>
	)
}

export default UserTrade
