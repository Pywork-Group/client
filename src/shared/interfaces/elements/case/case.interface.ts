import type {
	TypeCaseSetState,
	TypeCaseState,
} from '@/shared/types/hooks/case/case.type'
import type { RefObject } from 'react'
import type { ICurrentCase } from '../../api/case/case.interface'
import type { ICurrentUser } from '../../api/user/user.interface'
import type { ICurrency } from '../../common/currency/currency.interface'
import type { ILanguageState } from '../../common/language/language.interface'
import type { ITranslate } from '../../common/translate/translate.interface'
import type { ICaseRollHook } from '../../hooks/case/case.interface'

export interface ICaseRoll extends ITranslate, ILanguageState, ICaseRollHook {}

export interface ICaseInformer extends ICurrentUser, ITranslate {
	isLoading: boolean
	price: number
}

export interface ICaseSlots extends ICurrency, ITranslate, ILanguageState {
	refs: RefObject<(HTMLUListElement | null)[]>
	state: TypeCaseState
	name: string
	imagePath: string
	sell: (winId: number) => void
}

export interface ICaseControllers extends ICurrentCase, ITranslate, ICurrency {
	state: TypeCaseState
	setState: TypeCaseSetState
	openCase: () => void
	sellAll: () => void
}
