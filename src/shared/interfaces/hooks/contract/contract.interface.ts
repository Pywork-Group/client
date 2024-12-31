import type {
	TypeContractSetState,
	TypeContractState,
} from '@/shared/types/hooks/contract/contract.type'
import type {
	ICurrentUserExist,
	ISetCurrentUser,
} from '../../api/user/user.interface'
import type { ICurrency } from '../../common/currency/currency.interface'
import type { ILanguage } from '../../common/language/language.interface'

export interface IContractHook extends ICurrency, ILanguage {
	state: TypeContractState
	setState: TypeContractSetState
}

export interface IContractSkinsHook extends Omit<IContractHook, 'language'> {}

export interface IContractHookWithUser
	extends IContractHook,
		ICurrentUserExist,
		ISetCurrentUser {}
