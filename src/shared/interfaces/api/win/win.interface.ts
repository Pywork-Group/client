import type { TypeLiveWin } from '@/shared/types/api/win/win.type'
import type { IClassName } from '../../common/class-name/class-name.interface'
import type { ILanguageState } from '../../common/language/language.interface'

export interface IWin extends ILanguageState, IClassName {
	win: TypeLiveWin
}
