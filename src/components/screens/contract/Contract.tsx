'use client'

import { useContract } from '@/hooks/api/contract/useContract.hook'
import { useLanguage, useTranslate } from '@/store/language/language.store'
import { useUser } from '@/store/user/user.store'
import { getCurrency } from '@/utils/helpers/currency/currency.util'
import type { FC } from 'react'
import ContractReel from './reel/ContractReel'
import ContractSkins from './skins/ContractSkins'

const Contract: FC = () => {
	const translate = useTranslate('CONTRACT')

	const { user, setUser } = useUser()
	const { language, isRussian } = useLanguage()

	const { state, setState, isSkinExist, pagination, isLoading, count } =
		useContract()

	const currency = user?.currency || getCurrency(language)

	return (
		<>
			<ContractReel
				currency={currency}
				user={user!}
				setUser={setUser}
				state={state}
				setState={setState}
				translate={translate}
				language={language}
				isRussian={isRussian}
			/>
			<ContractSkins
				{...pagination}
				isLoading={isLoading}
				count={count}
				currency={currency}
				state={state}
				setState={setState}
				isSkinExist={isSkinExist}
				translate={translate}
				isRussian={isRussian}
			/>
		</>
	)
}

export default Contract
