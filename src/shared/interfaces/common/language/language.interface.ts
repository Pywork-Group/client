import type { EnumLanguage } from '@/shared/enums/language/language.enum'
import type { Dispatch, SetStateAction } from 'react'

export interface ILanguage {
	language: EnumLanguage
}

export interface ILanguageSetState {
	setLanguage: Dispatch<SetStateAction<EnumLanguage>>
}

export interface ILanguageState {
	isRussian: boolean
}
