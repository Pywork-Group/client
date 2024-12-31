import type { CurrentSkinQuery } from '@/__generated__/output'
import type { ICurrency } from '../../common/currency/currency.interface'
import type { ILanguageState } from '../../common/language/language.interface'
import type { ITranslate } from '../../common/translate/translate.interface'

export interface ISkinInfo extends ICurrency, ITranslate, ILanguageState {
	info: Omit<CurrentSkinQuery['currentSkin'], 'cases' | 'similarSkins'>
}

export interface ISkinCases extends ICurrency, ITranslate, ILanguageState {
	cases: CurrentSkinQuery['currentSkin']['cases']
}

export interface ISkinSimilar extends ICurrency, ITranslate, ILanguageState {
	skins: CurrentSkinQuery['currentSkin']['similarSkins']
}
