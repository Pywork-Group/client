import Skin from '@/components/parts/skin/Skin'
import Container from '@/components/ui/common/container/Container'
import { PUBLIC_ROUTE } from '@/constants/route/routes.constants'
import type { ISkinSimilar } from '@/shared/interfaces/elements/skin/skin.interface'
import { PackageSearch } from 'lucide-react'
import type { FC } from 'react'
import styles from './SkinSimilar.module.scss'

const SkinSimilar: FC<ISkinSimilar> = ({
	skins,
	currency,
	translate,
	isRussian,
}) => {
	return (
		<section className={styles.section}>
			<Container size="sm">
				<div className={styles.wrapper}>
					<h4 className={styles.heading}>
						<PackageSearch />
						{translate('similar.heading')}
					</h4>
					<ul className={styles.skins}>
						{skins.map((skin) => (
							<Skin
								key={skin.id}
								className={styles.skin}
								skin={skin}
								link={PUBLIC_ROUTE.SKIN(skin.id)}
								currency={currency}
								isRussian={isRussian}
							/>
						))}
					</ul>
				</div>
			</Container>
		</section>
	)
}

export default SkinSimilar
