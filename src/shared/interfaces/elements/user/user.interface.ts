import type { User } from '@/__generated__/output'
import type { ILanguageState } from '../../common/language/language.interface'
import type { ITranslate } from '../../common/translate/translate.interface'
import type { ILogoutHook } from '../../hooks/auth/auth.interface'
import type {
	IUserTradeHook,
	IUserWinsHook,
} from '../../hooks/user/user.interface'

export interface IUserWins extends IUserWinsHook, ILanguageState {
	isLoading: boolean
	isCurrent?: boolean
}

export interface IUserInfo extends ITranslate, ILogoutHook {
	user?: User
	isLoading: boolean
	isCurrent?: boolean
}

export interface IUserTrade extends IUserTradeHook, ITranslate {}
