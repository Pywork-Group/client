import type { TypeContractAward } from '@/shared/types/api/win/win.type'
import type {
	ILanguage,
	ILanguageState,
} from '../../common/language/language.interface'
import type { ITranslate } from '../../common/translate/translate.interface'
import type {
	IContractHookWithUser,
	IContractSkinsHook,
} from '../../hooks/contract/contract.interface'
import type { IPaginationState } from '../pagination/pagination.interface'

export interface IContractSkins
	extends IContractSkinsHook,
		IPaginationState,
		ILanguageState,
		ITranslate {
	isSkinExist: (id: number) => boolean
}

export interface IContractReel
	extends IContractHookWithUser,
		ILanguage,
		ILanguageState,
		ITranslate {}

export interface IContractWin
	extends IContractHookWithUser,
		ITranslate,
		ILanguageState {
	win: NonNullable<TypeContractAward>
}

export interface IContractInformer extends ITranslate {
	isLoading: boolean
}
