import { useUpdateTradeLinkMutation } from '@/__generated__/output'
import { APOLLO_FULL_OPTIONS } from '@/api/apollo/options/apollo-options.api'
import { USER_ERROR } from '@/notifications/error/user/user.error'
import { TRADE_SUCCESS } from '@/notifications/success/trade/trade.success'
import type { IUserTradeHook } from '@/shared/interfaces/hooks/user/user.interface'
import { tradeLinkRegex } from '@/utils/regex/trade-link.regex'
import { type ChangeEvent, type FormEvent, useState } from 'react'

export const useTrade = ({ tradeLink, language }: IUserTradeHook) => {
	const [value, setValue] = useState(tradeLink || '')
	const [link, setLink] = useState(tradeLink)

	const [updateTradeMutation, { loading: isLoading }] =
		useUpdateTradeLinkMutation({
			...APOLLO_FULL_OPTIONS(language),
			onCompleted: ({ updateTradeLink }) => {
				setLink(updateTradeLink)

				return TRADE_SUCCESS.UPDATE(language)
			},
		})

	const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setValue(target.value)
	}

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!value || !tradeLinkRegex.test(value)) {
			return USER_ERROR.TRADE_NOT_VALID(language)
		}

		if (value === link) return

		updateTradeMutation({ variables: { tradeLink: value } })
	}

	return {
		isLoading,
		onChange,
		onSubmit,
		value,
	}
}
