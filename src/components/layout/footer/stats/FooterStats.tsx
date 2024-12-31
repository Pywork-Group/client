import { useLiveStatistics } from '@/hooks/api/live/useLiveStatistics.hook'
import type { ITranslate } from '@/shared/interfaces/common/translate/translate.interface'
import { formatNumber } from '@/utils/formats/number/format-number.util'
import { KeyRound, ReceiptText, Trophy } from 'lucide-react'
import type { FC } from 'react'
import styles from './FooterStats.module.scss'

const FooterStats: FC<ITranslate> = ({ translate }) => {
	const { wins, cases, contracts, isLoading } = useLiveStatistics()

	return (
		<ul className={styles.list}>
			<li className={styles.item}>
				<Trophy />
				<div className={styles.stat}>
					<span className={styles.count}>
						{!isLoading && formatNumber(wins)}
					</span>
					<span className={styles.label}>{translate('stats.wins')}</span>
				</div>
			</li>
			<li className={styles.item}>
				<KeyRound />
				<div className={styles.stat}>
					<span className={styles.count}>
						{!isLoading && formatNumber(cases)}
					</span>
					<span className={styles.label}>{translate('stats.cases')}</span>
				</div>
			</li>
			<li className={styles.item}>
				<ReceiptText />
				<div className={styles.stat}>
					<span className={styles.count}>
						{!isLoading && formatNumber(contracts)}
					</span>
					<span className={styles.label}>{translate('stats.contracts')}</span>
				</div>
			</li>
		</ul>
	)
}

export default FooterStats
