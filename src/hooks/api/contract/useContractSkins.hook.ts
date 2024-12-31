import type { IContractSkinsHook } from '@/shared/interfaces/hooks/contract/contract.interface'
import type { TypeContractWin } from '@/shared/types/api/win/win.type'

export const useContractSkins = ({ state, setState }: IContractSkinsHook) => {
	const addToContract = (skin: TypeContractWin) => {
		if (state.contracts.length >= 10) return

		setState((prev) => {
			if (prev.contracts.find((existingSkin) => existingSkin.id === skin.id)) {
				return prev
			}

			return {
				...prev,
				contracts: [...prev.contracts, skin],
			}
		})
	}

	const isFull = state.win || state.contracts.length >= 10

	return {
		isFull,
		addToContract,
	}
}
