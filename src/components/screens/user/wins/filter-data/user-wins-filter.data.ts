import { Status } from '@/__generated__/output'
import type { ITranslate } from '@/shared/interfaces/common/translate/translate.interface'
import type { ISelectItem } from '@/shared/interfaces/elements/select/select.interface'

export const USER_WINS_FILTER_DATA = ({
	translate,
}: ITranslate): ISelectItem[] => [
	{
		label: translate('wins.filters.all'),
		value: null,
	},
	{
		label: translate('wins.filters.available'),
		value: Status.Won,
	},
	{
		label: translate('wins.filters.sold'),
		value: Status.Sold,
	},
	{
		label: translate('wins.filters.contracted'),
		value: Status.Contracted,
	},
	{
		label: translate('wins.filters.requested'),
		value: Status.Requested,
	},
	{
		label: translate('wins.filters.received'),
		value: Status.Received,
	},
]
