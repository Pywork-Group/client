import {
	Status,
	useRequestWinMutation,
	useSellAllWinsMutation,
	useSellWinsMutation,
	useUserWinsQuery,
} from '@/__generated__/output'
import {
	APOLLO_FULL_OPTIONS,
	APOLLO_OPTIONS,
} from '@/api/apollo/options/apollo-options.api'
import { usePagination } from '@/hooks/helpers/pagination/usePagination.hook'
import { WIN_SUCCESS } from '@/notifications/success/win/win.success'
import type { IUserWinsHook } from '@/shared/interfaces/hooks/user/user.interface'
import type { TypeUserWin } from '@/shared/types/api/win/win.type'
import type { TypeActionState } from '@/shared/types/hooks/win/win.type'
import { useUser } from '@/store/user/user.store'
import { formatPrice } from '@/utils/formats/price/format-price.util'
import { type CSSProperties, useState } from 'react'

export const useUserWins = ({
	userId,
	currency,
	translate,
	language,
}: IUserWinsHook) => {
	const { user, setUser } = useUser()

	const [wins, setWins] = useState<TypeUserWin[]>([])
	const [status, setStatus] = useState<Status | null>(null)
	const [action, setAction] = useState<TypeActionState>({
		isLoading: false,
	})

	const pagination = usePagination(21)

	const {
		error,
		data,
		previousData,
		loading: isLoading,
	} = useUserWinsQuery({
		...APOLLO_OPTIONS,
		variables: {
			query: {
				...(status && {
					status,
				}),
				userId,
				page: pagination.page,
				perPage: pagination.perPage,
			},
		},
		onCompleted: ({ wins }) => {
			setWins(wins.wins)
		},
	})

	const [sellWinMutation] = useSellWinsMutation({
		...APOLLO_FULL_OPTIONS(language),
		onError: () =>
			setAction({
				isLoading: false,
			}),
		onCompleted: ({ sellWins }) => {
			if (!user) return

			const win = wins.find(({ id }) => sellWins[0] === id)

			setWins((prev) =>
				prev.map((win) =>
					win.id === sellWins[0] ? { ...win, status: Status.Sold } : win
				)
			)

			setUser({
				...user,
				balance: user.balance + win?.[`price${currency}`],
			})

			setAction({
				isLoading: false,
			})

			return WIN_SUCCESS.SELL(language)
		},
	})

	const [sellAllWinsMutation] = useSellAllWinsMutation({
		...APOLLO_FULL_OPTIONS(language),
		onError: () =>
			setAction({
				isLoading: false,
			}),
		onCompleted: ({ sellAllWins }) => {
			if (!user) return

			setWins((prev) => [
				...prev.map((item) => ({
					...item,
					status: Status.Sold,
				})),
			])

			setUser({
				...user,
				balance: user.balance + sellAllWins,
			})

			setAction({
				isLoading: false,
			})

			return WIN_SUCCESS.SELL_ALL(language, formatPrice(sellAllWins, currency))
		},
	})

	const [requestWinMutation] = useRequestWinMutation({
		...APOLLO_FULL_OPTIONS(language),
		onError: () =>
			setAction({
				isLoading: false,
			}),
		onCompleted: ({ requestWin }) => {
			setWins((prev) =>
				prev.map((win) =>
					win.id === requestWin ? { ...win, status: Status.Requested } : win
				)
			)

			setAction({
				isLoading: false,
			})

			return WIN_SUCCESS.REQUEST(language)
		},
	})

	const sell = (winId: number) => {
		setAction({
			isLoading: true,
			winId,
			mutation: 'sell',
		})

		sellWinMutation({
			variables: {
				items: [winId],
			},
		})
	}

	const request = (winId: number) => {
		setAction({
			isLoading: true,
			winId,
			mutation: 'request',
		})

		requestWinMutation({
			variables: {
				winId,
			},
		})
	}

	const sellAll = () => {
		setAction({
			isLoading: true,
			winId: undefined,
			mutation: 'sellAll',
		})

		sellAllWinsMutation()
	}

	const changeStatus = (value: Status) => {
		pagination.setPage(1)
		setStatus(value)
	}

	const messages = {
		sell: {
			'--message': `"${translate('wins.messages.sell')}"`,
		} as CSSProperties,
		request: {
			'--message': `"${translate('wins.messages.request')}"`,
		} as CSSProperties,
		sold: {
			'--message': `"${translate('wins.messages.sold')}"`,
		} as CSSProperties,
		contracted: {
			'--message': `"${translate('wins.messages.contracted')}"`,
		} as CSSProperties,
		requested: {
			'--message': `"${translate('wins.messages.requested')}"`,
		} as CSSProperties,
		received: {
			'--message': `"${translate('wins.messages.received')}"`,
		} as CSSProperties,
	}

	return {
		action,
		isLoading,
		wins,
		error,
		count: (isLoading ? previousData?.wins.count : data?.wins.count) || 0,
		status,
		sellAll,
		sell,
		request,
		changeStatus,
		pagination,
		messages,
	}
}
