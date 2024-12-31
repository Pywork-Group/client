import type { IClassName } from '../../common/class-name/class-name.interface'

export interface IAlert extends IClassName {
	question: string
	accept: string
	cancel: string
	action: () => void
	close: () => void
}
