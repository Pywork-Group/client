import Case from '@/components/parts/case/Case'
import Container from '@/components/ui/common/container/Container'
import type { ISkinCases } from '@/shared/interfaces/elements/skin/skin.interface'
import { Package } from 'lucide-react'
import type { FC } from 'react'
import styles from './SkinCases.module.scss'

const SkinCases: FC<ISkinCases> = ({
	cases,
	currency,
	translate,
	isRussian,
}) => {
	return (
		<section className={styles.section}>
			<Container size="sm">
				<div className={styles.wrapper}>
					<h4 className={styles.heading}>
						<Package />
						{translate('cases.heading')}
					</h4>
					<ul className={styles.cases}>
						{cases.map((box) => (
							<Case
								key={box.slug}
								className={styles.case}
								box={box}
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

export default SkinCases
