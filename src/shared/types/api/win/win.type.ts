import type {
	ContractMutation,
	ContractWinsQuery,
	UserWinsQuery,
	WinsQuery,
} from '@/__generated__/output'

export type TypeUserWin = UserWinsQuery['wins']['wins'][0]
export type TypeContractWin = ContractWinsQuery['wins']['wins'][0]
export type TypeContractAward = ContractMutation['contract'] | null
export type TypeLiveWin = WinsQuery['wins']['wins'][0]
