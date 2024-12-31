import Container from '@/components/ui/common/container/Container'
import Image from '@/components/ui/common/image/Image'
import { TRANSLATE } from '@/constants/translate/translate.constants'
import type { ISkinInfo } from '@/shared/interfaces/elements/skin/skin.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import { formatPrice } from '@/utils/formats/price/format-price.util'
import { formatSkinInfo } from '@/utils/formats/skin-info/format-skin-info.util'
import type { FC } from 'react'
import styles from './SkinInfo.module.scss'

const SkinInfo: FC<ISkinInfo> = ({ info, currency, translate, isRussian }) => {
	const fullName = isRussian ? info.nameRu : info.nameEn
	const { type, name } = formatSkinInfo(fullName)

	return (
		<section className={styles.section}>
			<Container size="sm">
				<div className={styles.wrapper}>
					<h1 className={styles.heading}>{fullName}</h1>
					<div className={styles.fill}>
						<div className={styles.box}>
							<div className={styles.info}>
								<h2 className={styles.type}>{type}</h2>
								<h3 className={styles.name}>{name}</h3>
								<span
									className={formatClassName([
										styles.rarity,
										styles[info.rarity],
									])}
								>
									{TRANSLATE.RARITY[info.rarity]}
								</span>
							</div>
							<Image
								priority
								src={info.imagePath}
								width={285}
								height={215}
								title={name}
								alt={name}
							/>
							<ul className={styles.thumbs}>
								{Object.values(TRANSLATE.WEAR_SHORT).map((wear) => (
									<li key={wear} className={styles.thumb}>
										{wear}
									</li>
								))}
							</ul>
						</div>
						<div className={styles.table}>
							<ul className={styles.labels}>
								<li className={styles.label}>
									{translate('labels.quality')}
								</li>
								<li className={styles.label}>
									{translate('labels.regular')}
								</li>
								<li className={styles.label}>
									<span>StatTrak™</span>
								</li>
							</ul>
							<ul className={styles.list}>
								{info.qualities.map((quality) => (
									<li key={quality.wear} className={styles.item}>
										<span className={styles.wear}>
											{TRANSLATE.WEAR[quality.wear]}
										</span>
										<span className={styles.price}>
											{formatPrice(quality[`price${currency}`], currency)}
										</span>
										<span className={styles.price}>
											{formatPrice(
												quality[`statTrakPrice${currency}`],
												currency
											)}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default SkinInfo
