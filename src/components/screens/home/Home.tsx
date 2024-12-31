'use client'

import Category from '@/components/parts/category/Category'
import type { ICategories } from '@/shared/interfaces/api/category/category.interface'
import { useLanguage } from '@/store/language/language.store'
import { useCurrency } from '@/store/user/user.store'
import { getCurrency } from '@/utils/helpers/currency/currency.util'
import type { FC } from 'react'

const Home: FC<ICategories> = ({ categories }) => {
	const currency = useCurrency()
	const { language, isRussian } = useLanguage()

	return categories.map((category, index) => (
		<Category
			key={index}
			category={category}
			isRussian={isRussian}
			currency={currency || getCurrency(language)}
		/>
	))
}

export default Home
