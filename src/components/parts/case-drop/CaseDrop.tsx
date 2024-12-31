import Image from '@/components/ui/common/image/Image'
import type { ICaseDrop } from '@/shared/interfaces/api/case/case.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import { formatSkinInfo } from '@/utils/formats/skin-info/format-skin-info.util'
import type { FC, PropsWithChildren } from 'react'
import styles from './CaseDrop.module.scss'

const CaseDrop: FC<PropsWithChildren<ICaseDrop>> = ({
	skin,
	isRussian,
	children,
	className,
}) => {
	const { type, name } = formatSkinInfo(isRussian ? skin.nameRu : skin.nameEn)

	return (
		<li
			className={formatClassName([styles.drop, className, styles[skin.rarity]])}
		>
			{children}
			<Image
				src={skin.imagePath}
				width={150}
				height={120}
				title={name}
				alt={name}
			/>
			<div className={styles.info}>
				<span className={styles.type}>{type}</span>
				<span className={styles.name}>{name}</span>
			</div>
		</li>
	)
}

export default CaseDrop
