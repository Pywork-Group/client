import type { Category } from '@/__generated__/output'
import type { ILanguageState } from '../../common/language/language.interface'
import type { ICurrency } from '../../common/currency/currency.interface'

export interface ICategories {
	categories: Category[]
}

export interface ICategory extends ICurrency, ILanguageState {
	category: Category
}
