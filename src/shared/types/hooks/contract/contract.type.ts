import type { Dispatch, SetStateAction } from 'react'
import type { TypeContractAward, TypeContractWin } from '../../api/win/win.type'

export type TypeContractState = {
	contracts: TypeContractWin[]
	skins: TypeContractWin[]
	win: TypeContractAward
	page: number
	isFetched: boolean
}

export type TypeContractSetState = Dispatch<SetStateAction<TypeContractState>>
