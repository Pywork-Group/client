import { TRANSLATES } from '@/base/translates/translates.data'
import { EnumLanguage } from '@/shared/enums/language/language.enum'
import type { ILanguageStore } from '@/shared/interfaces/store/language/language-store.interface'
import { createContext, useContext } from 'react'

// TODO: CHANGE TO OTHER LANGUAGE
export const LanguageContext = createContext<ILanguageStore>({
	language: EnumLanguage.RU,
	setLanguage: () => {},
	isRussian: true,
})

export const useLanguage = () => useContext(LanguageContext)

export const useTranslate = (namespace?: string) => {
	const { language } = useLanguage()

	const getTranslation = (obj: any, key: string) => {
		return key.split('.').reduce((acc, part) => acc?.[part], obj)
	}

	const replacePlaceholders = (
		text: string,
		variables: Record<string, any>
	) => {
		return text.replace(/\{(\w+)\}/g, (_, key) =>
			variables[key] !== undefined ? variables[key] : `{${key}}`
		)
	}

	return (key: string, variables?: Record<string, any>): string => {
		const fullKey = namespace ? `${namespace}.${key}` : key
		const translation = getTranslation(TRANSLATES[language], fullKey) || key

		if (variables) {
			return replacePlaceholders(translation, variables)
		}

		return translation
	}
}
