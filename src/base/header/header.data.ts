import { PUBLIC_ROUTE } from '@/constants/route/routes.constants'
import type { ILink } from '@/shared/interfaces/base/link/link.interface'
import type { ITranslate } from '@/shared/interfaces/common/translate/translate.interface'
import { ReceiptText } from 'lucide-react'

export const HEADER_NAVIGATION_ITEMS = ({ translate }: ITranslate): ILink[] => [
	{
		icon: ReceiptText,
		label: translate('contract'),
		href: PUBLIC_ROUTE.CONTRACT,
	},
]
