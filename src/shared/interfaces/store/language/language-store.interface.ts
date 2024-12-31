import type {
	ILanguage,
	ILanguageSetState,
	ILanguageState,
} from '../../common/language/language.interface'

export interface ILanguageStore
	extends ILanguage,
		ILanguageState,
		ILanguageSetState {}
