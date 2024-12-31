import { Rarity, Wear } from '@/__generated__/output'

export const TRANSLATE = {
	WEAR_SHORT: {
		[Wear.BattleScarred]: 'BS',
		[Wear.WellWorn]: 'WW',
		[Wear.FieldTested]: 'FT',
		[Wear.MinimalWear]: 'MW',
		[Wear.FactoryNew]: 'FN',
	},
	WEAR: {
		[Wear.BattleScarred]: 'Battle-Scarred',
		[Wear.WellWorn]: 'Well-Worn',
		[Wear.FieldTested]: 'Field-Tested',
		[Wear.MinimalWear]: 'Minimal Wear',
		[Wear.FactoryNew]: 'Factory New',
	},
	RARITY: {
		[Rarity.Consumer]: 'CONSUMER',
		[Rarity.MilSpec]: 'MILSPEC',
		[Rarity.Industrial]: 'INDUSTRIAL',
		[Rarity.Restricted]: 'RESTRICTED',
		[Rarity.Classified]: 'CLASSIFIED',
		[Rarity.Covert]: 'COVERT',
		[Rarity.Gold]: 'GOLD',
	},
}
