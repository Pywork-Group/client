import type { IClassName } from '../../common/class-name/class-name.interface'

export interface ILogo extends IClassName {
	variant?: 'full' | 'icon'
	iconId?: string
}
