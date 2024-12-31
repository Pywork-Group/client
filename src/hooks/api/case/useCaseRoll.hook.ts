import {
	useOpenCaseMutation,
	useSellWinsMutation,
	type Skin,
} from '@/__generated__/output'
import { APOLLO_FULL_OPTIONS } from '@/api/apollo/options/apollo-options.api'
import { useMediaQuery } from '@/hooks/helpers/media-query/useMediaQuery.hook'
import { USER_ERROR } from '@/notifications/error/user/user.error'
import type { ICaseRollHook } from '@/shared/interfaces/hooks/case/case.interface'
import type { TypeCaseState } from '@/shared/types/hooks/case/case.type'
import { useUser } from '@/store/user/user.store'
import { getCurrency } from '@/utils/helpers/currency/currency.util'
import { getTranslateX } from '@/utils/helpers/translateX/translateX.util'
import { useEffect, useRef, useState } from 'react'

export const useCaseRoll = ({ box, language }: ICaseRollHook) => {
	const refs = useRef<HTMLUListElement[]>([])

	const [openCaseMutation] = useOpenCaseMutation(APOLLO_FULL_OPTIONS(language))
	const [sellWinsMutation] = useSellWinsMutation(APOLLO_FULL_OPTIONS(language))

	const { user, setUser, isLoading } = useUser()

	const [state, setState] = useState<TypeCaseState>({
		times: 1,
		slots: [],
		sales: [],
		price: 0,
		isFetched: false,
		isAnimationEnd: false,
		isOpeningEnd: false,
		isFast: false,
	})

	const isLargeScreen = useMediaQuery('(max-width: 1400px)')
	const isMediumScreen = useMediaQuery('(max-width: 1200px)')
	const isSmallScreen = useMediaQuery('(max-width: 900px)')
	const isExtraSmallScreen = useMediaQuery('(max-width: 600px)')

	const currency = user?.currency || getCurrency(language)

	const openCase = () => {
		if (!user) return

		if (user.balance < box[`price${currency}`] * state.times)
			return USER_ERROR.NOT_ENOUGH_BALANCE(language)

		openCaseMutation({
			variables: {
				slug: box.slug,
				times: state.times,
			},
			onCompleted: ({ openCase }) => {
				const wins = openCase
					.map((slot) => slot.find((skin) => skin.win))
					.filter(Boolean) as Skin[]

				const price = wins.reduce(
					(total, { win }) => total + win?.[`price${currency}`],
					0
				)

				setState((prev) => ({
					...prev,
					slots: openCase,
					price,
				}))

				setUser({
					...user,
					balance: user.balance - box[`price${currency}`] * state.times,
				})
			},
			onError: () =>
				setState((prev) => ({
					...prev,
					slots: [],
					sales: [],
					price: 0,
					isAnimationEnd: false,
					isOpeningEnd: false,
					isFast: false,
				})),
		})
	}

	const sellSkins = (items: number[], isReset?: boolean) => {
		sellWinsMutation({
			variables: {
				items,
			},
			onCompleted: ({ sellWins }) => {
				if (!user) return

				if (isReset) {
					setUser({
						...user,
						balance: user.balance + state.price,
					})

					setState((prev) => ({
						...prev,
						slots: [],
						sales: [],
						price: 0,
						isAnimationEnd: false,
						isOpeningEnd: false,
					}))
				} else {
					const { win } = (
						state.slots
							.map((slot) => slot.find((skin) => skin.win))
							.filter(Boolean) as Skin[]
					).find(({ win }) => win?.id === items[0]) as Skin

					const price = state.price - win?.[`price${currency}`]

					setUser({
						...user,
						balance: user.balance + win?.[`price${currency}`],
					})

					setState((prev) => ({
						...prev,
						price,
						sales: [...prev.sales, ...sellWins],
					}))
				}
			},
		})
	}

	const sellAll = () => {
		const wins = state.slots
			.map((slot) => slot.find((skin) => skin.win))
			.filter(Boolean) as Skin[]

		sellSkins(
			wins.map(({ win }) => win!.id),
			true
		)
	}

	const sell = (id: number) => sellSkins([id])

	useEffect(() => {
		if (isLoading) return

		setState((prev) => ({ ...prev, isFetched: true }))
	}, [user])

	useEffect(() => {
		refs.current = []
	}, [state.times])

	useEffect(() => {
		if (
			state.slots.length === 0 ||
			!refs.current ||
			refs.current.some((el) => !el)
		) {
			return
		}

		const { translateX, translateCenter } = getTranslateX(refs.current, 44)

		refs.current.map((list, index) =>
			list
				.animate(
					[
						{ transform: 'translateX(0px)' },
						{
							transform: `translateX(-${
								state.isFast ? translateCenter[index] : translateX[index]
							}px)`,
						},
					],
					{
						duration: state.isFast ? 2500 : 10000,
						easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
						fill: 'forwards',
					}
				)
				.addEventListener('finish', () => {
					if (!state.isFast) {
						list
							.animate(
								[
									{ transform: `translateX(-${translateX[index]}px)` },
									{ transform: `translateX(-${translateCenter[index]}px)` },
								],
								{
									duration: 1000,
									easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
									fill: 'forwards',
								}
							)
							.addEventListener('finish', () => {
								setState((prev) => ({
									...prev,
									isAnimationEnd: true,
									isOpeningEnd: true,
								}))
							})
					} else {
						setState((prev) => ({
							...prev,
							isAnimationEnd: true,
							isOpeningEnd: true,
						}))
					}
				})
		)
	}, [
		refs.current,
		state.slots,
		isLargeScreen,
		isMediumScreen,
		isSmallScreen,
		isExtraSmallScreen,
	])

	return {
		refs,
		user,
		currency,
		state,
		setState,
		openCase,
		sell,
		sellAll,
	}
}
