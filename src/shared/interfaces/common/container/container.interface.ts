import type { PropsWithChildren } from 'react'
import type { IClassName } from '../class-name/class-name.interface'

export interface IContainer extends PropsWithChildren<IClassName> {
	size?: 'sm' | 'md' | 'full'
}
