import Image from '@/components/ui/common/image/Image'
import { PUBLIC_ROUTE } from '@/constants/route/routes.constants'
import type { ICase } from '@/shared/interfaces/api/case/case.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import { formatPrice } from '@/utils/formats/price/format-price.util'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './Case.module.scss'

const Case: FC<ICase> = ({ box, isRussian, currency, className }) => {
	const name = isRussian ? box.nameRu : box.nameEn

	return (
		<li className={formatClassName([styles.case, className])}>
			<Link className={styles.link} href={PUBLIC_ROUTE.CASE(box.slug)}>
				<div className={styles.info}>
					<span className={styles.name}>{name}</span>
					<div className={styles.box}>
						<span className={styles.price}>
							{formatPrice(box[`price${currency}`], currency)}
						</span>
						{box[`oldPrice${currency}`] && (
							<span className={styles.oldPrice}>
								{formatPrice(box[`oldPrice${currency}`], currency)}
							</span>
						)}
					</div>
				</div>
				<div className={styles.preview}>
					<Image
						src={box.imagePath}
						width={260}
						height={260}
						title={name}
						alt={name}
					/>
				</div>
			</Link>
		</li>
	)
}

export default Case
