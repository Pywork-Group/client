import { Currency } from '@/__generated__/output'

export const formatPrice = (value: number, currency: Currency) => {
	const symbol =
		currency === Currency.Rub ? 'D' : currency === Currency.Usd ? '$' : '€'

	const formattedValue = value % 1 === 0 ? value.toFixed(0) : value.toFixed(2)

	return formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ` ${symbol}`
}
