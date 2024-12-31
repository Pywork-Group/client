import type { ReactNode } from 'react'
import type { IClassName } from '../../common/class-name/class-name.interface'

export interface ISelectItem {
	label: ReactNode
	value: any
}

export interface ISelect extends IClassName {
	items: ISelectItem[]
	value: any
	change: (value: any) => void
}
