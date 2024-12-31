import Skin from '@/components/parts/skin/Skin'
import Container from '@/components/ui/common/container/Container'
import { PUBLIC_ROUTE } from '@/constants/route/routes.constants'
import type { ISkins } from '@/shared/interfaces/api/skin/skin.interface'
import type { FC } from 'react'
import styles from './CaseSkins.module.scss'

const CaseSkins: FC<ISkins> = ({ skins, currency, translate, isRussian }) => {
	return (
		<section className={styles.section}>
			<Container size="sm">
				<div className={styles.wrapper}>
					<div className={styles.heading}>{translate('skins.heading')}</div>
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

export default CaseSkins
