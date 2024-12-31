import { useContractMutation } from '@/__generated__/output'
import { APOLLO_FULL_OPTIONS } from '@/api/apollo/options/apollo-options.api'
import type { IContractHook } from '@/shared/interfaces/hooks/contract/contract.interface'

export const useContractReel = ({
	currency,
	language,
	state,
	setState,
}: IContractHook) => {
	const [contractMutation, { loading: isLoading }] = useContractMutation({
		...APOLLO_FULL_OPTIONS(language),
		variables: {
			items: state.contracts.map(({ id }) => id),
		},
		onCompleted: ({ contract }) =>
			setState((prev) => ({
				...prev,
				win: contract,
			})),
	})

	const removeFromContract = (skinId: number) => {
		setState((prev) => ({
			...prev,
			contracts: prev.contracts.filter(({ id }) => id !== skinId),
		}))
	}

	const contract = () => contractMutation()

	const totalPrice = state.contracts.reduce(
		(sum, item) => sum + +item[`price${currency}`],
		0
	)
	const count = state.contracts.length
	const isEnabled = count >= 3 && !isLoading && !state.win

	const smallestPrice = (totalPrice * 25) / 100
	const biggestPrice = totalPrice * 4

	return {
		removeFromContract,
		contract,
		totalPrice,
		count,
		isEnabled,
		smallestPrice,
		biggestPrice,
	}
}
