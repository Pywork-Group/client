import { Currency } from '@/__generated__/output'
import { EnumLanguage } from '@/shared/enums/language/language.enum'

export const getCurrency = (language: EnumLanguage) => {
	switch (language) {
		case EnumLanguage.RU:
			return Currency.Rub
		case EnumLanguage.EN:
			return Currency.Usd
		default:
			return Currency.Eur
	}
}
