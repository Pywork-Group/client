import type { IClassName } from '@/shared/interfaces/common/class-name/class-name.interface'

export interface IPagination extends IClassName {
	count: number
	page: number
	prev: () => void
	next: () => void
	goTo: (page: number) => void
}

export interface IPaginationState {
	isLoading: boolean
	count: number
	perPage: number
	page: number
	prev: () => void
	next: () => void
	goTo: (page: number) => void
}
