import { Status, useContractWinsQuery } from '@/__generated__/output'
import { APOLLO_OPTIONS } from '@/api/apollo/options/apollo-options.api'
import { usePagination } from '@/hooks/helpers/pagination/usePagination.hook'
import type { TypeContractState } from '@/shared/types/hooks/contract/contract.type'
import { useState } from 'react'

export const useContract = () => {
	const [state, setState] = useState<TypeContractState>({
		contracts: [],
		skins: [],
		win: null,
		page: 1,
		isFetched: false,
	})

	const pagination = usePagination(21)

	const isSkinExist = (winId: number) =>
		state.contracts.some(({ id }) => id === winId)

	const {
		previousData,
		data,
		loading: isLoading,
	} = useContractWinsQuery({
		...APOLLO_OPTIONS,
		variables: {
			query: {
				isUserRequired: true,
				page: pagination.page,
				perPage: pagination.perPage,
				status: Status.Won,
			},
		},
		onCompleted: ({ wins }) => {
			setState((prev) => ({
				...prev,
				skins: wins.wins,
				isFetched: true,
			}))
		},
	})

	return {
		state,
		setState,
		isSkinExist,
		isLoading,
		count: (isLoading ? previousData?.wins.count : data?.wins.count) || 0,
		pagination,
	}
}
