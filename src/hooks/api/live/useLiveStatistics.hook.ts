import {
	Stat,
	type Statistics,
	useLiveStatisticsSubscription,
	useStatisticsQuery,
} from '@/__generated__/output'
import { APOLLO_OPTIONS } from '@/api/apollo/options/apollo-options.api'
import { useState } from 'react'

export const useLiveStatistics = () => {
	const [statistics, setStatistics] = useState<Statistics>({
		wins: 0,
		cases: 0,
		contracts: 0,
	})

	useLiveStatisticsSubscription({
		onData: ({ data }) => {
			const statistic = data?.data?.liveStatistics

			if (!statistic || data.error) return

			const isCase = statistic.stat === Stat.Case
			const isContract = statistic.stat === Stat.Contract

			setStatistics((prev) => ({
				...prev,
				...(isCase
					? {
							cases: prev.cases + statistic.increment,
					  }
					: isContract
					? {
							contracts: prev.contracts + statistic.increment,
					  }
					: {
							wins: prev.wins + statistic.increment,
					  }),
			}))
		},
	})

	const { loading, error } = useStatisticsQuery({
		...APOLLO_OPTIONS,
		onCompleted: ({ statistics }) => setStatistics(statistics),
	})

	return {
		...statistics,
		isLoading: loading || !!error,
	}
}
