import Container from '@/components/ui/common/container/Container'
import type { ICategory } from '@/shared/interfaces/api/category/category.interface'
import type { FC } from 'react'
import styles from './Category.module.scss'
import CatalogCase from '../catalog-case/CatalogCase'

const Category: FC<ICategory> = ({ category, currency, isRussian }) => {
	const name = isRussian ? category.nameRu : category.nameEn

	return (
		<section className={styles.category}>
			<Container size='full'>
				<div className={styles.wrapper}>
					<h3 className={styles.heading}>{name}</h3>
					<ul className={styles.cases}>
						{category.cases.map((box) => (
							<CatalogCase
								key={box.slug}
								className={styles.case}
								box={box}
								isRussian={isRussian}
								currency={currency}
							/>
						))}
					</ul>
				</div>
			</Container>
		</section>
	)
}

export default Category
