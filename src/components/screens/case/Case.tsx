'use client'

import type { ICurrentCase } from '@/shared/interfaces/api/case/case.interface'
import { useLanguage, useTranslate } from '@/store/language/language.store'
import { useCurrency } from '@/store/user/user.store'
import { getCurrency } from '@/utils/helpers/currency/currency.util'
import type { FC } from 'react'
import CaseRoll from './roll/CaseRoll'
import CaseSkins from './skins/CaseSkins'

const Case: FC<ICurrentCase> = ({ box }) => {
	const currency = useCurrency()
	const { language, isRussian } = useLanguage()
	const translate = useTranslate('CASE')

	return (
		<>
			<CaseRoll
				box={box}
				language={language}
				translate={translate}
				isRussian={isRussian}
			/>
			<CaseSkins
				skins={box.skins}
				currency={currency || getCurrency(language)}
				translate={translate}
				isRussian={isRussian}
			/>
		</>
	)
}

export default Case
