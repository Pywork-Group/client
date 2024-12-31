import type {
	Case,
	CurrentCase,
	OpenCaseMutation,
} from '@/__generated__/output'
import type { IClassName } from '../../common/class-name/class-name.interface'
import type { ICurrency } from '../../common/currency/currency.interface'
import type { ILanguageState } from '../../common/language/language.interface'

export interface ICurrentCase {
	box: CurrentCase
}

export interface ICase extends ICurrency, ILanguageState, IClassName {
	box: Case
}

export interface ICaseDrop extends ILanguageState, IClassName {
	skin: OpenCaseMutation['openCase'][0][0]
}
