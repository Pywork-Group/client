import type { ICurrency } from '../../common/currency/currency.interface'
import type { ILanguage } from '../../common/language/language.interface'
import type { ITranslate } from '../../common/translate/translate.interface'

export interface IUserTradeHook extends ILanguage {
	tradeLink?: string | null
}

export interface IUserWinsHook extends ICurrency, ITranslate, ILanguage {
	userId?: number
}
