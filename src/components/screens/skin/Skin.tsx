'use client'

import type { ICurrentSkin } from '@/shared/interfaces/api/skin/skin.interface'
import { useLanguage, useTranslate } from '@/store/language/language.store'
import { useCurrency } from '@/store/user/user.store'
import { getCurrency } from '@/utils/helpers/currency/currency.util'
import type { FC } from 'react'
import SkinCases from './cases/SkinCases'
import SkinInfo from './info/SkinInfo'
import SkinSimilar from './similar/SkinSimilar'

const Skin: FC<ICurrentSkin> = ({ skin }) => {
	const { cases, similarSkins, ...info } = skin

	const { language, isRussian } = useLanguage()

	const currency = useCurrency() || getCurrency(language)
	const translate = useTranslate('SKIN')

	return (
		<>
			<SkinInfo
				info={info}
				currency={currency}
				translate={translate}
				isRussian={isRussian}
			/>
			{cases.length > 0 && (
				<SkinCases
					cases={cases}
					currency={currency}
					translate={translate}
					isRussian={isRussian}
				/>
			)}
			{similarSkins.length > 0 && (
				<SkinSimilar
					skins={similarSkins}
					currency={currency}
					translate={translate}
					isRussian={isRussian}
				/>
			)}
		</>
	)
}

export default Skin
