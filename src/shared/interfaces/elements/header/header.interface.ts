import type {
	ICurrentUser,
	ICurrentUserLoading,
} from '../../api/user/user.interface'
import type {
	ILanguage,
	ILanguageSetState,
	ILanguageState,
} from '../../common/language/language.interface'
import type { ITranslate } from '../../common/translate/translate.interface'

export interface IHeaderLanguages extends ILanguage, ILanguageSetState {}
export interface IHeaderWins
	extends ICurrentUser,
		ICurrentUserLoading,
		ILanguageState {}
export interface IHeaderUser
	extends ICurrentUser,
		ICurrentUserLoading,
		ITranslate {}
