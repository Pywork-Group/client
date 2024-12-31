import {
	ContractWinsDocument,
	type ContractWinsQuery,
	useSellWinsMutation,
} from '@/__generated__/output'
import { apolloClient } from '@/api/apollo/apollo.client'
import { APOLLO_FULL_OPTIONS } from '@/api/apollo/options/apollo-options.api'
import type { IContractHookWithUser } from '@/shared/interfaces/hooks/contract/contract.interface'

export const useContractWin = ({
	currency,
	language,
	state,
	setState,
	user,
	setUser,
}: IContractHookWithUser) => {
	const [sellWins] = useSellWinsMutation(APOLLO_FULL_OPTIONS(language))

	const refetch = async () => {
		const { results } = apolloClient.refetchQueries({
			include: [ContractWinsDocument],
		})

		const response = await Promise.all(results)
		const { wins } = response[0].data as ContractWinsQuery

		setState((prev) => ({
			...prev,
			skins: wins.wins,	
			contracts: [],
			win: null,
			page: 1,
		}))
	}

	const tryAgain = async () => await refetch()

	const sell = async () => {
		const winId = state.win?.id

		if (!winId) return

		sellWins({
			variables: {
				items: [winId],
			},
			onCompleted: async () => {
				const balance = user.balance + state.win?.[`price${currency}`]

				setUser({
					...user,
					balance,
				})

				await refetch()
			},
		})
	}

	return {
		tryAgain,
		sell,
	}
}
