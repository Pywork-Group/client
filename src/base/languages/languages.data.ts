import BrazilianFlagIcon from '@/components/ui/icons/BrazilianFlagIcon'
import FrenchFlagIcon from '@/components/ui/icons/FrenchFlagIcon'
import GermanFlagIcon from '@/components/ui/icons/GermanFlagIcon'
import PolishFlagIcon from '@/components/ui/icons/PolishFlagIcon'
import RussianFlagIcon from '@/components/ui/icons/RussianFlagIcon'
import SpanishFlagIcon from '@/components/ui/icons/SpanishFlagIcon'
import SwedishFlagIcon from '@/components/ui/icons/SwedishFlagIcon'
import TurkishFlagIcon from '@/components/ui/icons/TurkishFlagIcon'
import USAFlagIcon from '@/components/ui/icons/USAFlagIcon'
import { EnumLanguage } from '@/shared/enums/language/language.enum'
import type { ILanguageItem } from '@/shared/interfaces/base/language/language.interface'

export const LANGUAGES: ILanguageItem[] = [
	{
		icon: RussianFlagIcon,
		language: EnumLanguage.RU,
	},
	{
		icon: USAFlagIcon,
		language: EnumLanguage.EN,
	},
	{
		icon: BrazilianFlagIcon,
		language: EnumLanguage.PT,
	},
	{
		icon: PolishFlagIcon,
		language: EnumLanguage.PL,
	},
	{
		icon: SwedishFlagIcon,
		language: EnumLanguage.SE,
	},
	{
		icon: GermanFlagIcon,
		language: EnumLanguage.DE,
	},
	{
		icon: SpanishFlagIcon,
		language: EnumLanguage.ES,
	},
	{
		icon: FrenchFlagIcon,
		language: EnumLanguage.FR,
	},
	{
		icon: TurkishFlagIcon,
		language: EnumLanguage.TR,
	},
]
