import type { ISetCurrentUser } from '../../api/user/user.interface'
import type { ILanguage } from '../../common/language/language.interface'

export interface ILogoutHook extends ISetCurrentUser, ILanguage {}
