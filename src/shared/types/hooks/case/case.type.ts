import type { OpenCaseMutation } from '@/__generated__/output'
import type { Dispatch, SetStateAction } from 'react'

export type TypeCaseState = {
	times: number
	isFetched: boolean
	slots: OpenCaseMutation['openCase']
	sales: number[]
	price: number
	isAnimationEnd: boolean
	isOpeningEnd: boolean
	isFast: boolean
}

export type TypeCaseSetState = Dispatch<SetStateAction<TypeCaseState>>
