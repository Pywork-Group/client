import type { IClassName } from '../class-name/class-name.interface'

export interface IImage extends IClassName {
	loading?: 'lazy'
	priority?: boolean
	fill?: boolean
	src: string
	width?: number
	height?: number
	title: string
	alt: string
}
