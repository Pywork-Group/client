import type { ICurrentCase } from '../../api/case/case.interface'
import type { ILanguage } from '../../common/language/language.interface'

export interface ICaseRollHook extends ICurrentCase, ILanguage {}
