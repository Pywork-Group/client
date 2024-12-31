export const PUBLIC_ROUTE = {
	HOME: '/',
	BONUSES: '/bonuses',
	UPGRADE: '/upgrade',
	CONTRACT: '/contract',
	DEPOSIT: '/deposit',
	AGREEMENT: '/agreement',
	PRIVACY: '/privacy',
	CASE: (slug: string) => `/case/${slug}`,
	SKIN: (id: number) => `/skin/${id}`,
	USER: (id: number) => `/user/${id}`,
}

export const STEAM_ROUTE = {
	PROFILE: (steamId: string) =>
		`https://steamcommunity.com/profiles/${steamId}`,
	TRADE_LINK:
		'https://steamcommunity.com/id/me/tradeoffers/privacy#trade_offer_access_url',
}
