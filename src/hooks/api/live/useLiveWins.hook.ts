import { useLiveWinsSubscription, useWinsQuery } from '@/__generated__/output'
import { APOLLO_OPTIONS } from '@/api/apollo/options/apollo-options.api'
import type { TypeLiveWin } from '@/shared/types/api/win/win.type'
import { useState } from 'react'

export const useLiveWins = (userId?: number) => {
	const [isFetched, setIsFetched] = useState(false)
	const [wins, setWins] = useState<TypeLiveWin[]>([])

	useLiveWinsSubscription({
		...(userId && {
			variables: {
				userId,
			},
		}),
		skip: !isFetched,
		onData: ({ data }) => {
			const win = data?.data?.liveWins

			if (!win || data.error) return

			setWins((prev) => [win, ...prev].slice(0, 12))
		},
	})

	const { loading, error } = useWinsQuery({
		...APOLLO_OPTIONS,
		variables: {
			query: {
				page: 1,
				perPage: 12,
				isNotUser: true,
			},
		},
		onCompleted: ({ wins }) => {
			setWins(wins.wins)
			setIsFetched(true)
		},
	})

	return {
		isFetched,
		wins,
		isLoading: loading || !!error,
	}
}
