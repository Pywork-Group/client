import type { IClassName } from '../../common/class-name/class-name.interface'

export interface ISwitcher extends IClassName {
	value: boolean
	label: string
	onClick: () => void
}
