import { PUBLIC_ROUTE } from '@/constants/route/routes.constants'
import type { ITranslate } from '@/shared/interfaces/common/translate/translate.interface'
import { CircleAlert } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './ContractInformer.module.scss'

const ContractInformer: FC<ITranslate> = ({ translate }) => {
	return (
		<div className={styles.informer}>
			<CircleAlert />
			<div className={styles.info}>
				<div className={styles.heading}>{translate('informer.heading')}</div>
				<div className={styles.description}>
					<Link className={styles.link} href={PUBLIC_ROUTE.HOME}>
						{translate('informer.link')}
					</Link>
					<p className={styles.text}>, {translate('informer.description')}</p>
				</div>
			</div>
		</div>
	)
}

export default ContractInformer
