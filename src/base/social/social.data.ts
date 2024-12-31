import TelegramIcon from '@/components/ui/icons/TelegramIcon'
import TikTokIcon from '@/components/ui/icons/TikTokIcon'
import VKIcon from '@/components/ui/icons/VKIcon'
import YoutubeIcon from '@/components/ui/icons/YoutubeIcon'
import type { ISocialItem } from '@/shared/interfaces/base/social/social.interface'

export const SOCIAL_ITEMS = (isRussian: boolean): ISocialItem[] => [
	{
		icon: VKIcon,
		href: `https://vk.com/kupidrop_${isRussian ? 'ru' : 'en'}`,
	},
	{
		icon: TelegramIcon,
		href: `https://t.me/kupidrop_${isRussian ? 'ru' : 'en'}`,
	},
	{
		icon: TikTokIcon,
		href: `https://www.tiktok.com/kupidrop_${isRussian ? 'ru' : 'en'}`,
	},
	{
		icon: YoutubeIcon,
		href: `https://www.youtube.com/channel/kupidrop_${isRussian ? 'ru' : 'en'}`,
	},
]
