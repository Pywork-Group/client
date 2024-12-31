import type { CurrentSkin, Skin } from '@/__generated__/output'
import type { IClassName } from '../../common/class-name/class-name.interface'
import type { ICurrency } from '../../common/currency/currency.interface'
import type { ILanguageState } from '../../common/language/language.interface'
import type { ITranslate } from '../../common/translate/translate.interface'

export interface ISkins extends ICurrency, ITranslate, ILanguageState {
	skins: Skin[]
}

export interface ISkin extends ICurrency, ILanguageState, IClassName {
	skin: Skin
	link: string
}

export interface ICurrentSkin {
	skin: CurrentSkin
}
