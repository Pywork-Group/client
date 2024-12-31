import Image from '@/components/ui/common/image/Image'
import { TRANSLATE } from '@/constants/translate/translate.constants'
import type { ISkin } from '@/shared/interfaces/api/skin/skin.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import { formatPrice } from '@/utils/formats/price/format-price.util'
import { formatSkinInfo } from '@/utils/formats/skin-info/format-skin-info.util'
import Link from 'next/link'
import type { FC, PropsWithChildren } from 'react'
import styles from './Skin.module.scss'

const Skin: FC<PropsWithChildren<ISkin>> = ({
	skin,
	link,
	currency,
	isRussian,
	children,
	className,
}) => {
	const { type, name } = formatSkinInfo(isRussian ? skin.nameRu : skin.nameEn)

	return (
		<li className={formatClassName([styles.skin, className])}>
			{skin[`price${currency}`] && (
				<span className={styles.price}>
					{formatPrice(skin[`price${currency}`], currency)}
				</span>
			)}
			<Link
				className={formatClassName([styles.link, styles[skin.rarity]])}
				href={link}
			>
				<Image
					src={skin.imagePath}
					width={130}
					height={100}
					title={name}
					alt={name}
				/>
				<div className={styles.info}>
					<div className={styles.fill}>
						<div className={styles.type}>
							{skin.isStatTrak && 'StatTrak™ '}
							{type}
						</div>
						<div className={styles.box}>
							{skin.wear && (
								<span className={styles.wear}>
									({TRANSLATE.WEAR_SHORT[skin.wear]})
								</span>
							)}
							<span className={styles.name}>{name}</span>
						</div>
					</div>
				</div>
			</Link>
			{children}
		</li>
	)
}

export default Skin
