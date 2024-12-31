'use client'

import { EnumLanguage } from '@/shared/enums/language/language.enum'
import { LanguageContext } from '@/store/language/language.store'
import { useState, type PropsWithChildren } from 'react'

// TODO: CHANGE TO OTHER LANGUAGE
export default function LanguageProvider({ children }: PropsWithChildren) {
	const [language, setLanguage] = useState<EnumLanguage>(EnumLanguage.RU)

	return (
		<LanguageContext.Provider
			value={{
				language,
				setLanguage,
				isRussian: language === EnumLanguage.RU,
			}}
		>
			{children}
		</LanguageContext.Provider>
	)
}
