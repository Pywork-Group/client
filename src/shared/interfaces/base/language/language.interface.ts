import type { FC } from 'react'
import type { ILanguage } from '../../common/language/language.interface'

export interface ILanguageItem extends ILanguage {
	icon: FC
}
