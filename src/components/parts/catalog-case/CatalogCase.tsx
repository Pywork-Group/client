import Image from '@/components/ui/common/image/Image'
import { PUBLIC_ROUTE } from '@/constants/route/routes.constants'
import type { ICase } from '@/shared/interfaces/api/case/case.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import { formatPrice } from '@/utils/formats/price/format-price.util'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './CatalogCase.module.scss'

const CatalogCase: FC<ICase> = ({ box, isRussian, currency, className }) => {
	const name = isRussian ? box.nameRu : box.nameEn

	return (
		<li className={formatClassName([styles.case, className])}>
			<Link className={styles.link} href={PUBLIC_ROUTE.CASE(box.slug)}>
				<Image
					src={box.imagePath}
					loading="lazy"
					width={280}
					height={280}
					title={name}
					alt={name}
				/>
				<span className={styles.name}>{name}</span>
				<span className={styles.price}>
					{formatPrice(box[`price${currency}`], currency)}
				</span>
				{box[`oldPrice${currency}`] && (
					<span className={styles.oldPrice}>
						{formatPrice(box[`oldPrice${currency}`], currency)}
					</span>
				)}
			</Link>
		</li>
	)
}

export default CatalogCase
