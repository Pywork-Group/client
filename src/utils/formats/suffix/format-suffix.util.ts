import { EnumLanguage } from '@/shared/enums/language/language.enum'

export const formatSuffix = (count: number, language: string): string => {
	const rules: Record<string, (count: number) => string> = {
		[EnumLanguage.RU]: (count) => {
			if (count > 1 && count < 5) {
				return 'а'
			} else if (count === 0 || count >= 5) {
				return 'ов'
			}
			return ''
		},
		[EnumLanguage.EN]: () => (count === 1 ? '' : 's'),
		[EnumLanguage.PT]: () => (count === 1 ? '' : 's'),
		[EnumLanguage.PL]: (count) => {
			const mod10 = count % 10
			const mod100 = count % 100
			if (mod10 === 1 && mod100 !== 11) {
				return ''
			} else if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) {
				return 'y'
			}
			return ''
		},
		[EnumLanguage.SE]: () => (count === 1 ? '' : 'ar'),
		[EnumLanguage.DE]: () => (count === 1 ? '' : 'e'),
		[EnumLanguage.ES]: () => (count === 1 ? '' : 's'),
		[EnumLanguage.FR]: () => (count === 1 ? '' : 's'),
		[EnumLanguage.TR]: () => '',
	}

	const formatRule = rules[language] || rules['en']
	return formatRule(count)
}
